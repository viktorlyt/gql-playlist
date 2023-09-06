const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to DB
mongoose.connect(
  "mongodb+srv://viktorlyt:cdt23nbr23@qql-playlist.yp74s7f.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => console.log("connected to DB"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("server on port 4000 is running"));
