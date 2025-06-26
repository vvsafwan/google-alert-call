This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# 📞 Google Calendar Call Reminder

A full-stack app that checks your Google Calendar and automatically places a phone call via Twilio for upcoming events.

---

## 🚀 Features

- 🔐 Google OAuth login (NextAuth)
- 📅 Calendar event polling with Google Calendar API
- 📞 Auto-triggered Twilio phone call
- 🗃️ Prisma ORM with MySQL for storing user data
- 🎨 Tailwind CSS styling
- ⏱️ Cron job to check events every minute

---

## 🧑‍💻 Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: NextAuth + API routes
- **Database**: MySQL + Prisma
- **Telephony**: Twilio API
- **Scheduler**: `node-cron`

---

## 📦 Getting Started

### 1. Clone the Repository
---------------------------
```bash
git clone https://github.com/yourusername/google-alert-call.git
cd google-alert-call



### 2. Install Dependencies
---------------------------
npm install



⚙️ Configure Environment Variables
Create a .env file at the project root:
--------------------------------------
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

# MySQL
DATABASE_URL="mysql://root:your_password@localhost:3306/google_alert_call"

# Twilio
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_verified_number



🔧 Prisma Setup
Generate and migrate schema:
-----------------------------
npx prisma generate
npx prisma migrate dev --name init


🖥️ Running the Application
▶️ Run Frontend
----------------------------
npm run dev



⏰ Run Cron Job (separately)
-----------------------------
node cron-runner.js



✅ How It Works
User logs in using Google OAuth.

Enters and saves their phone number.

A cron job runs every minute:

Fetches upcoming Google Calendar events (within 5 mins).

If a match is found, Twilio triggers a phone call to the user.




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
