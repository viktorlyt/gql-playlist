const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to DB
try {
  mongoose.connect(
    "mongodb+srv://viktorlyt:cdt23nbr23@qql-playlist.yp74s7f.mongodb.net/?retryWrites=true&w=majority"
  );
  mongoose.connection.once("open", () => console.log("connected to DB"));
} catch (error) {
  console.log(error);
}

app.use(
  "/graphql",
  createHandler({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("server on port 4000 is running"));
