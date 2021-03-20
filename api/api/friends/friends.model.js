const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const FriendSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  isFav: {
    type: Boolean,
    default:false
    // required: true,
  },
  created_at: {
    type: Date,
    default: Date.now()
    // required: true,
  }
},{
    versionKey: false 
  });

module.exports = {
    Friends: mongoose.model("Friends", FriendSchema, "friends"),
};
