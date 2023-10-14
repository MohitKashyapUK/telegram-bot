function Message(data) {
  // function(s)
  const send = require("./send"),
  // variables
  message = data["message"],
  message_id = message["message_id"],
  chat_id = message["from"]["id"],
  text = message["text"],
  params = {
    chat_id,
    text
  };
  
  // sending response
  send("sendMessage", params);
}

export default Message;