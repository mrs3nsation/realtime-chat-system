/**
 * Database access layer.
 * Re-exports the Prisma client singleton and all repositories from the
 * `database` package. Import everything DB-related from here inside
 * backend services — never import directly from `database` or `@prisma/client`.
 */

export {
    prisma,
    userRepository,
    conversationRepository,
    conversationMemberRepository,
    messageRepository,
    messageStatusRepository,
    attachmentRepository,
    emailVerificationRepository,
    oauthAccountRepository,
    refreshTokenRepository,
} from "database";
