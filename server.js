const express = require("express");
const app = express();
const cors = require("cors");
const connectToDataBase = require("./dataBase/connection");
const teacherDataSchema = require("./dataBase/schema");
const apiRoutes = require("./routes/routes");
const port = 3000;

connectToDataBase();

app.use(express.json());

// CORS middleware
app.use(cors({
  origin: 'https://teachermanagementsystembackend.vercel.app',
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true
}));

// API routes
app.use("/api", apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
