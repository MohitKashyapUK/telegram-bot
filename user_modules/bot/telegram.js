function manager(req, res) {
  const handlers_path = "./telegram/",
  data = req.body,
  keys = Object.keys(data),
  method_name = (keys[0] != "update_id") || keys[1],
  handler = require(`${handlers_path}${method_name}`);
  if (handler) handler(data);
  res.send("True");
}

export default manager;