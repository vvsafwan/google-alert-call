import { getSession } from "next-auth/react";
import { prisma } from "../../lib/db";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user || !user.phoneNumber) {
      return res.status(404).json({ phone: "" });
    }

    return res.status(200).json({ phone: user.phoneNumber });
  } catch (error) {
    console.error("DB error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
