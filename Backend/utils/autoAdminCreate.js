const ADMIN_MODEL = require("../models/admin.model");
// const bcrypt = require("bcrypt");

module.exports.autoCreateAdmin = async () => {
  const isAdmin = await ADMIN_MODEL.findOne({ email: "admin@gmail.com" });
  if (!isAdmin) {
    // const hash = bcrypt.hashSync("123456", 5);
    await ADMIN_MODEL.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: "123456",
      role: "admin",
    });
  }
};
