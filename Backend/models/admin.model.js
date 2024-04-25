const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      index: true
    },
    role: {
      type: String,
      trim: true,
      enum: ["admin", "employee"],
      default: "employee"
    },
    password: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
);

const ADMIN_MODEL = mongoose.model("admin", adminSchema);

module.exports = ADMIN_MODEL;
