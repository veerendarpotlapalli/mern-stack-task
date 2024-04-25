const express = require("express");
const { connection } = require("./config/db");
const app = express();
const cors = require("cors")
const adminRoute = require("./router/admin.routes");
const employeeRoute = require("./router/employee.routes");
const { authentication } = require("./middleware/authentication");
const { autoCreateAdmin } = require("./utils/autoAdminCreate");
app.use(cors("*"));

app.use(express.json());

app.use("/api/admin", adminRoute);
app.use(authentication);
app.use("/api/employee", employeeRoute);

app.listen(8080, async () => {
  try {
    await connection();
    console.log("DB connected Sucessfully");
    await autoCreateAdmin()
  } catch (error) {
    console.log("error", error);
  }
});
