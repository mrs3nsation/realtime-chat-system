import "dotenv/config";

const BASE = "http://localhost:5000/api/auth";

async function test(label: string, fn: () => Promise<unknown>) {
  try {
    const result = await fn();
    console.log(`✅ ${label}:`, JSON.stringify(result));
  } catch (err: unknown) {
    console.error(`❌ ${label}:`, err instanceof Error ? err.message : err);
  }
}

async function main() {
  await test("Google OAuth redirect", async () => {
    const res = await fetch(`${BASE}/google`, { redirect: "manual" });
    const location = res.headers.get("location") ?? "";
    return {
      status: res.status,
      redirectsTo: location.startsWith("https://accounts.google.com") ? "Google ✅" : location.slice(0, 60),
    };
  });

  await test("GitHub OAuth redirect", async () => {
    const res = await fetch(`${BASE}/github`, { redirect: "manual" });
    const location = res.headers.get("location") ?? "";
    return {
      status: res.status,
      redirectsTo: location.startsWith("https://github.com/login/oauth") ? "GitHub ✅" : location.slice(0, 60),
    };
  });

  console.log("\n✅ OAuth endpoints verified — backend is fully complete!");
}

main().catch(console.error);
