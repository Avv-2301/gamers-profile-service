const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  profilePhoto: {
    type: String,
  },
  quote: {
    type: String,
    maxlength: 25,
  },
  profileType: {
    type: String,
    required: true,
    enum: ["public", "private"],
    default: "public",
  },
  library: [
    {
      type: String,
    },
  ],
});
