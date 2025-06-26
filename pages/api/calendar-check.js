import { prisma } from "../../lib/db";
import { getUpcomingEvents } from "../../lib/google";
import { triggerCall } from "../../lib/twilio";

export default async function handler(req, res) {
  const users = await prisma.user.findMany({
    where: {
      phoneNumber: { not: null },
      accessToken: { not: null },
    },
  });

  console.log("[Users]", users);

  for (const user of users) {
    const events = await getUpcomingEvents(user.accessToken);
    if (events.length > 0) {
      await triggerCall(user.phoneNumber);
    }
  }

  res.status(200).json({ message: "Checked all users" });
}
