import { google } from "googleapis";

export function getGoogleCalendarClient(accessToken) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });
  return google.calendar({ version: "v3", auth });
}

export async function getUpcomingEvents(accessToken) {
  const calendar = getGoogleCalendarClient(accessToken);

  const now = new Date();
  //     const inFiveMin = new Date(now.getTime() + 5 * 60 * 1000);
  const IST_OFFSET_MINUTES = 5.5 * 60;
  const nowIST = new Date(now.getTime() + IST_OFFSET_MINUTES * 60 * 1000);
  const inFiveMinIST = new Date(nowIST.getTime() + 5 * 60 * 1000);

  const response = await calendar.events.list({
    calendarId: "safdev1820@gmail.com",
    // timeMin: now.toISOString(),
    // timeMax: inFiveMin.toISOString(),
    timeMin: nowIST.toISOString(),
    timeMax: inFiveMinIST.toISOString(),
    timeZone: "Asia/Kolkata",
    singleEvents: true,
    orderBy: "startTime",
  });

  console.log("[Google Calendar Events]", response.data.items);
  return response.data.items || [];
}
