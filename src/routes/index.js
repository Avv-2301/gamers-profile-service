const express = require("express");
const profileRoutes = require("./app/profile");

const router = express.Router();

router.use("/profile", profileRoutes);

module.exports = router;
