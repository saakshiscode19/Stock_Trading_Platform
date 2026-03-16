const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");
require("dotenv").config();

module.exports.userVerification = (req, res, next) => {
  // 1. Check if the request has an "Authorization" header
  const tokenHeader = req.header("Authorization");
  
  if (!tokenHeader) {
    return res.status(401).json({ status: false, message: "Access denied. No token provided." });
  }

  // 2. Tokens usually come in the format "Bearer <token_string>", so we strip the "Bearer " part
  const token = tokenHeader.startsWith("Bearer ") ? tokenHeader.slice(7) : tokenHeader;

  // 3. Verify the token using your secret key
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(403).json({ status: false, message: "Invalid or expired token." });
    } else {
      // 4. If the token is valid, find the user in the database
      const user = await UserModel.findById(data.id);
      if (user) {
        req.user = user; // Attach the user info to the request
        next(); // This is the magic word! It tells the bouncer: "They are clear, let them in."
      } else {
        return res.status(404).json({ status: false, message: "User not found." });
      }
    }
  });
};