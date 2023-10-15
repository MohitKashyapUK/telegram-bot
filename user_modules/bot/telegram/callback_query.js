const send = require("./send");

/*
YT = youtube scraper
YTVD = without sound youtube videos
*/

async function CallbackQuery(req, res) {
  const { callback_query } = req.body;
  const { from, message, data } = callback_query; // data me callback_query ka data hai
  const { message_id, reply_to_message } = message;
  const { text } = reply_to_message; // user ka send kiya hua text message
  const chat_id = from["id"];
  const params = { chat_id, message_id };
  
  if (data == "YT") {
    const reply_markup = {
      inline_keyboard: [
        [{ text: "Videos (no sound)", callback_data: "youtube_videos_without_sound" }, { text: "Videos (with sound)", callback_data: "youtube_videos_with_sound" }],
        [{ text: "Audios", callback_data: "youtube_audios" }]
      ]
    };
    params["reply_markup"] = JSON.stringify(reply_markup);
  } else {
    params["text"] = "Something went wrong!";
  }
  
  await send("editMessageText", params);
  res.send("True");
}

module.exports = CallbackQuery;