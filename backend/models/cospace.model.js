const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cospaceSchema = new Schema(
  {
    cospacename: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coactors: {
      type: Array,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const cospace = mongoose.model("cospace", cospaceSchema);

module.exports = cospace;
