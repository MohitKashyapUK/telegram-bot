async function Message(req, res) {
  // function(s)
  const send = require("./send");
  
  // variables
  const data = req.body;
  const message = data["message"];
  const message_id = message["message_id"];
  const chat_id = message["from"]["id"];
  const text = message["text"];
  const params = { chat_id, text: data };
  
  // sending response
  await send("sendMessage", params);
  res.send("True");
}

module.exports = Message;