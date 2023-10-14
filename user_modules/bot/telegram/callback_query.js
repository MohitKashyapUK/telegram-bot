const send = require("./send");

async function CallbackQuery(req, res) {
  const data = req.body;
  const callback_query = data["callback_query"];
  const chat_id = callback_query["from"]["id"];
  const message_id = callback_query["message"]["message_id"];
  const params = {
    chat_id,
    message_id,
    text: data
  };
  
  await send("editMessageText", params);
  res.send("True");
}

module.exports = CallbackQuery;