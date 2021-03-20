const mongoose = require("mongoose");

const db = require("../config/config").mongoURI;
// Connect to MongoDB
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose
  .connect(db, connectionOptions)
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = {
  Friends: require('../api/friends/friends.model').Friends,
};
