const authorization = (...role) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({
        status: "fail",
        error: "Admin not authenticated, Please Login first"
      });
    }
    const userRole = req.user.role;
    if (!role.includes(userRole)) {
      return res.status(403).json({
        status: "fail",
        error: "You are not authorized to access this"
      });
    }
    next();
  };
};
module.exports = authorization;
