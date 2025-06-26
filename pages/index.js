import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Google Calendar Call Reminder
        </h1>
        {!session ? (
          <>
            <p className="text-gray-600 mb-4">Please sign in to continue</p>
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Sign in with Google
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700 mb-4">
              Signed in as{" "}
              <span className="font-medium">{session.user.email}</span>
            </p>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
