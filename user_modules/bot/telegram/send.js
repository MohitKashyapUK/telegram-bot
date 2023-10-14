async function send(method, params) {
  const axios = require("axios");
  const TOKEN = process.env.bot_token;
  const url = `https://api.telegram.org/bot${TOKEN}/${method}`;

  // making http request
  const resp = await axios.post(url, params);
  /* const data = JSON.parse(resp.data);
  if (!data["ok"]) console.log(data); */
  console.log(resp.data);
  console.log(typeof resp.data);
}

module.exports = send;