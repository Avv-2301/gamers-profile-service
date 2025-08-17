const express = require("express");

const { createProfile } = require("../../controllers/app/profile");

const router = express.Router();

router.post("/create-profile", createProfile);

module.exports = router;
