function send(method, params) {
  const axios = require("axios"),
  TOKEN = process.env.bot_token,
  url = `https://api.telegram.org/bot${TOKEN}/${method}`;
  
  axios.post(url, params)
  .then(data => {
    const tg_data = JSON.parse(data);
    if (!tg_data["ok"]) console.log(tg_data);
  });
}

export default send;