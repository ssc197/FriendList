const express = require("express");
const router = express.Router();
// Load input validation
const friendsConfig = require("./friends.config");

friendsConfig.map(route =>{
    if(route.type === 'post'){
      router.route(route.path).post( route.controller );
    }
    else if(route.type === 'get'){
      router.route(route.path).get( route.controller)
    }
    else if(route.type === 'delete'){
        router.route(route.path).get( route.controller)
      }

  })

module.exports = router;
