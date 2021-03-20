
const controller = require("./friends.controller");

const userConfig =[
        {
            "path": "/add",
             "type": "post",
            "controller": controller.add,
         },
        {
            "path": "/delete/:id",
             "type": "post",
            "controller": controller.delete,
         },
        {
            "path": "/",
             "type": "get",
            "controller": controller.get,
         },
        {
            "path": "/update/:id",
             "type": "post",
            "controller": controller.update,
         },
    ]
module.exports = userConfig;