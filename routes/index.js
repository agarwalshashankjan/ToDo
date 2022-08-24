const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
router.get("/", homeController.Home);
router.post("/create", homeController.Create);
router.post("/deleteTasks", homeController.Delete);
module.exports = router;
