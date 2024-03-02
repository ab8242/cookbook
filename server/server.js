const express = require("express");
const cors = require("cors");
const port = 8000;

const app = express();

//MiddleWare for server.js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

require("./config/mongoose.config");

require("./routes/cookBook.routes")(app);

app.listen(port, () => {console.log(`Listening on port: ${port}`)});