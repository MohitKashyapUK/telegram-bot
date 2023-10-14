async function Message(req, res) {
  // function(s)
  const send = require("./send");
  
  // variables
  const data = req.body;
  const message = data["message"];
  const message_id = message["message_id"];
  const chat_id = message["from"]["id"];
  const text = message["text"];
  const params = { chat_id, text: "Select handler!", reply_to_message_id: message_id };
  
  const reply_markup = {
    inline_keyboard: [
      [{ text: "YouTube", callback_data: "YT" }]
    ]
  };
  
  params["reply_markup"] = JSON.stringify(reply_markup);
  
  // sending response
  await send("sendMessage", params);
  res.send("True");
}

module.exports = Message;