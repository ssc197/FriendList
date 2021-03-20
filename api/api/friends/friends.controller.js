const { Friends } = require("../../helper/db");

const express = require("express");
const router = express.Router();

var self = (module.exports = {
  add: (req, res) => {
    const _friends = new Friends(req.body);

    _friends.save().then((data) => {
      return res.status(200).json({ message: "SuccessFully Added" });
    });
  },
  get: (req, res) => {
    Friends.find({}).then((data) => {
      if (data) {
        return res.status(200).json(data);
      }
    });
  },
  update: (req, res) => {
    let id = req.params.id;
     let data = req.body;
    Friends.findOneAndUpdate(
      {
        _id: id,
      },
      {
        isFav: data.isFav,
      },
      { multi: false, upsert: true }
    )
      .then((result) => {
        return res.status(200).json({
          status: true,
          message: "Update sucessfull",
        });
      })
      .catch((error) => {
        console.error(error);
        return res.status(400).json(error);
      });
  },
  delete: (req, res) => {
    let id = req.params.id;
     Friends.deleteOne({
      _id: id
    }).then((data) => {
      if (data) {
        return res
        .status(200)
        .json({ message: "Successfully deleted" });

      }
    }).catch((error) => {
        return res.status(400).json({ message: "Data doesn't exists" });
      });;
  },
});
