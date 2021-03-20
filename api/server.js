const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const friends = require("./api/friends/friends.router");

const app = express();
const helmet = require("helmet");


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join('./', 'frontend')));

// Passport middleware
// Passport config
app.get('/', (req,res) => {
  res.sendFile(path.join('./', 'frontend/index.html'));
});

app.use("/api/friends", friends);

const port = process.env.PORT || 5000
 // process.env.port is Heroku's port if you choose to deploy the app there

// http.createServer(app).listen(80);

// https.createServer(options, app).listen(443);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
