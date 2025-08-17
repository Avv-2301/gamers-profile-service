const express = require("express");
const profileRoutes = require("./app/profile");

const router = express.Router();

router.use("/profiles", profileRoutes);

module.exports = router;
