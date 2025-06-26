// pages/dashboard.js
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchPhone = async () => {
      if (!session?.user?.email) return;
      const res = await fetch("/api/get-phone");
      const data = await res.json();
      if (data.phone) setPhone(data.phone);
    };
    fetchPhone();
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = session?.access_token;
    const res = await fetch("/api/save-phone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, accessToken }),
      credentials: "include",
    });
    const data = await res.json();
    setStatus(data.message || data.error);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome {session?.user?.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Save Phone
          </button>
        </form>

        {status && (
          <p className="text-sm text-center text-green-600 mt-4">{status}</p>
        )}

        <button
          onClick={() => signOut()}
          className="w-full mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
