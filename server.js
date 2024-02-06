const express = require("express");
const app = express();
const cors = require("cors");
const connectToDataBase = require("./dataBase/connection");
const teacherDataSchema = require("./dataBase/schema");
const apiRoutes = require("./routes/routes");
const port = 3000;

connectToDataBase();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://teacher-management-portal-front-end.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
