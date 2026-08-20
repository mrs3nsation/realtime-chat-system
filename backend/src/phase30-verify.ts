import "dotenv/config";

const BASE = "http://localhost:5000/api";

async function test(label: string, fn: () => Promise<unknown>) {
  try {
    const result = await fn();
    console.log(`✅ ${label}:`, JSON.stringify(result, null, 2).slice(0, 300));
  } catch (err: unknown) {
    console.error(`❌ ${label}:`, err instanceof Error ? err.message : err);
  }
}

async function post(path: string, body: unknown, cookie?: string) {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(cookie ? { Cookie: cookie } : {}) },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  const setCookie = res.headers.get("set-cookie") ?? "";
  return { data, setCookie, status: res.status };
}

async function get(path: string, token?: string) {
  const res = await fetch(`${BASE}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return res.json();
}

const email = `phase30+${Date.now()}@example.com`;

let accessToken = "";
let refreshCookie = "";

async function main() {
  await test("Health check", () => get("/health"));

  await test("Register", async () => {
    const { data, setCookie, status } = await post("/auth/register", {
      email,
      password: "SecurePass123",
      name: "Phase 30 Test",
    });
    accessToken = data?.data?.accessToken ?? "";
    refreshCookie = setCookie.split(";")[0];
    return { status, hasToken: !!accessToken, hasCookie: !!refreshCookie };
  });

  await test("Get /users/me", () => get("/users/me", accessToken));

  await test("Login", async () => {
    const { data, status } = await post("/auth/login", { email, password: "SecurePass123" });
    return { status, hasToken: !!data?.data?.accessToken };
  });

  await test("Refresh token", async () => {
    const { data, status } = await post("/auth/refresh", {}, refreshCookie);
    return { status, hasToken: !!data?.data?.accessToken };
  });

  await test("Logout", async () => {
    const { data, status } = await post("/auth/logout", {}, refreshCookie);
    return { status, message: data?.data?.message };
  });

  await test("Validation error (bad register)", async () => {
    const { data, status } = await post("/auth/register", { email: "notanemail", password: "123" });
    return { status, errors: data?.details?.length };
  });

  console.log("\n🎉 Phase 30 Acceptance Verification Complete");
}

main().catch(console.error);

