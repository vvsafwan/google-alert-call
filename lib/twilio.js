import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function triggerCall(phoneNumber) {
  return client.calls.create({
    to: phoneNumber,
    from: process.env.TWILIO_PHONE_NUMBER,
    url: "https://handler.twilio.com/twiml/EH180be9b08903cb692bba2908be168065", // replace with your TwiML Bin URL
  });
}
