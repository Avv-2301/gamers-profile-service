const express = require("express");
const profileRoutes = require("./app/profile");

const router = express.Router();

router.use("/", profileRoutes);

module.exports = router;
