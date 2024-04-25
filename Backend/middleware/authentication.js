const jwt = require("jsonwebtoken");
const { TokenExpiredError } = require("jsonwebtoken");

module.exports.authentication = async (req, res, next) => {
  try {
    let token = req.headers?.authorization?.split(" ")[1];

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          res.status(401).json({
            status: false,
            message: "Token has expired. Please log in again.",
          });
        } else {
          res.status(401).json({
            status: false,
            message: "Invalid token. Please log in again.",
          });
        }
      }
    } else {
      res.status(401).json({
        status: false,
        message: "Please log in first.",
      });
    }
  } catch (error) {
    console.error("Error creating account:", error);
  }
};
