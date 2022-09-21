const print = console.log;
const app = require("./src/app");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  print(`Listening on port : ${PORT}`);
});
