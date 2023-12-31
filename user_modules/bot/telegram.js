function manager(req, res) {
  const handlers_path = "./telegram/",
  data = req.body,
  keys = Object.keys(data),
  method_name = (keys[0] != "update_id") || keys[1];
  var handler;
  try {
    handler = require(`${handlers_path}${method_name}`);
  } catch (e) {
    handler = null;
    console.log("This object is not available!");
  }
  if (handler) handler(req, res);
}

module.exports = manager;