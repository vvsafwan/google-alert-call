import { getSession } from "next-auth/react";
import { prisma } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {

    const { phone, accessToken } = req.body;
    console.log("[Request Body]", req.body);
    if (!phone) return res.status(400).json({ error: "Phone required" });

    await prisma.user.upsert({
      where: { email: "" },
      update: { phoneNumber: phone, accessToken: accessToken },
      create: {
        email: "",
        phoneNumber: phone,
        accessToken: accessToken,
      },
    });

    return res.status(200).json({ message: "Phone saved" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
