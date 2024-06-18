const express = require("express");
const { pushnotification } = require("../controller/controller");
const Router = express.Router();


Router.post("/push/message", async (req, res, next) => {
    try {
        console.log("hai");
        const result = await pushnotification(req.body);
        res.send("success",result)
    } catch (error) {
        let errors = JSON.parse(error?.message);
       console.log("errors",errors);
    }
});

module.exports = Router