const axios = require("axios");
const TOKEN = process.env.bot_token;
const BASE_URL = `https://api.telegram.org/bot${TOKEN}`;

async function send(method, params) {
  await axios.post(`${BASE_URL}/${method}`, params)
  .then(resp => {
    const data = resp.data;
    if (!data["ok"]) console.error(data);
  });
}

module.exports = send;