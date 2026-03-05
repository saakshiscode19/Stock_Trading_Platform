const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean, // Added this line so your data saves correctly
});

module.exports = { HoldingsSchema };