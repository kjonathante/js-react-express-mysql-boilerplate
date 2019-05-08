const express = require("express");
const routes = require("./routes");
const config = require("./config");
const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api", routes);

config.connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + config.connection.threadId);
  const server = app.listen(PORT, () => {
    console.log(
      `listening on ${JSON.stringify(server.address())} in ${app.get(
        "env"
      )} mode.`
    );
  });
});
