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
    date: { type: Date, required: true },
    coactors: {
      type: String,
      required: true,
    },
    messeges: {
      sender: String,
      message: String,
      timestamps: time,
    }
  },
  {
    timestamps: true,
  }
);

const cospace = mongoose.model("cospace", cospaceSchema);

module.exports = cospace;
