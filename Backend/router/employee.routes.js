const express = require("express");
const router = express.Router();
const authorization = require("../middleware/authorization");
// const bcrypt = require("bcrypt");
const ADMIN_MODEL = require("../models/admin.model");

// List all employees
router.get("/", authorization("admin"), async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    let query = req.query || {};
    delete query.page;
    delete query.limit;
    query.role = "employee";

    const [employees, totalDocs] = await Promise.all([
      ADMIN_MODEL.find(query)
        .skip((page - 1) * limit)
        .limit(limit),
      ADMIN_MODEL.countDocuments(query),
    ]);

    if (employees.length == 0) {
      return res.status(404).json({
        status: false,
        message: "Employees not found",
      });
    }

    res.status(200).json({
      status: true,
      data: employees,
      page,
      limit,
      totalDocs,
      noOfPages: Math.ceil(totalDocs / limit),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new employee
router.post("/create", authorization("admin"), async (req, res) => {
  try {
    const { name, email, password = "", phoneNumber } = req.body;
    if (!password) {
      return res.status(400).json({
        status: false,
        message: "Password is required",
      });
    }
    const newEmployee = await ADMIN_MODEL.findOne({ email });
    if (newEmployee) {
      return res.status(400).json({
        status: false,
        message: "Employee already exist",
      });
    }
    // const hash = bcrypt.hashSync(password, 5);
    await ADMIN_MODEL.create({
      name,
      email,
      role: "employee",
      password,
      phoneNumber,
    });

    res.status(200).json({
      status: true,
      message: "Employee created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update an employee
router.patch("/update/:id", authorization("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await ADMIN_MODEL.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedEmployee) {
      return res.status(404).json({
        status: false,
        message: "Employee not found",
      });
    }
    res.status(200).json({
      status: true,
      message: "Employee updated sucessfully",
      data: updatedEmployee,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete an employee
router.delete("/delete/:id", authorization("admin"), async (req, res) => {
  try {
    const { id } = req.params;
    const isAdmin = await ADMIN_MODEL.findById(id);
    if (!isAdmin) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
    if (isAdmin?.role === "admin") {
      return res.status(400).json({
        status: false,
        message: "Admin can not be delete",
      });
    }
    await ADMIN_MODEL.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
      message: "Employee deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
