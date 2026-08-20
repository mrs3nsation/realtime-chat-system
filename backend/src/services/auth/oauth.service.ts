import { oauthAccountRepository, userRepository } from "../../config/db.js";

type OAuthProvider = "GOOGLE" | "GITHUB";

interface OAuthProfile {
  provider: OAuthProvider;
  providerAccountId: string;
  email: string;
  name?: string;
  avatarUrl?: string;
}

export async function findOrCreateOAuthUser(profile: OAuthProfile): Promise<{
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
}> {
  const existing = await oauthAccountRepository.findByProviderAccount(
    profile.provider,
    profile.providerAccountId
  );

  if (existing) {
    const user = await userRepository.findById(existing.userId);
    if (!user) {
      throw new Error("OAuth account references non-existent user");
    }
    return { id: user.id, email: user.email, name: user.name, avatarUrl: user.avatarUrl };
  }

  let user = await userRepository.findByEmail(profile.email);

  if (!user) {
    user = await userRepository.create({
      email: profile.email,
      name: profile.name,
      avatarUrl: profile.avatarUrl,
    });
  }

  await oauthAccountRepository.create({
    userId: user.id,
    provider: profile.provider,
    providerAccountId: profile.providerAccountId,
  });

  return { id: user.id, email: user.email, name: user.name, avatarUrl: user.avatarUrl };
}
