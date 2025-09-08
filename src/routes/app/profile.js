const express = require("express");

const { createProfile } = require("../../controllers/app/profile");

const router = express.Router();
const { internalAuth } = require("../../middleware/internalAuth");

router.post("/create-profile", internalAuth, createProfile);

module.exports = router;
