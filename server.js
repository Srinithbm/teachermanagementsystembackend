const express = require("express");
const app = express();
const cors = require("cors");
const connectToDataBase = require("./dataBase/connection");
const teacherDataSchema = require("./dataBase/schema");
const apiRoutes = require("./routes/routes");
const port = 3000;

connectToDataBase();

app.use(express.json());
app.use(cors({
  origin:["https://teacher-management-portal-front-end.vercel.app"],
  methods:["POST","GET","PUT","DELETE"],
  credentials : true
}));
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
