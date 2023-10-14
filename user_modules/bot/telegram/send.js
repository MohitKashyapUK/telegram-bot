async function send(method, params) {
  const axios = require("axios"),
  TOKEN = process.env.bot_token,
  url = `https://api.telegram.org/bot${TOKEN}/${method}`,
  
  // making http request
  resp = await axios.post(url, params),
  data = JSON.parse(resp.data);
  if (!data["ok"]) console.log(data);
}

module.exports = send;