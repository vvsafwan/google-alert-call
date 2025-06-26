const cron = require('node-cron');
const fetch = require('node-fetch'); // ✅ works with node-fetch@2

cron.schedule('*/5 * * * *', async () => {
  console.log('[Cron] Running...');
  try {
    const res = await fetch('http://localhost:3000/api/calendar-check');
    const json = await res.json();
    console.log('[Cron]', json);
  } catch (err) {
    console.error('[Cron error]', err.message);
  }
});