const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema"); // Fixed import path & name

const PositionsModel = model("position", PositionsSchema); // Removed 'new', fixed variable name
module.exports = { PositionsModel };