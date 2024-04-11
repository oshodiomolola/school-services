const express = require("express");
const { connectToDatabase } = require("./config");
const { schoolRouter } = require("./routes/school.route");
const { courseRouter } = require("./routes/course.route");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();
connectToDatabase();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/school", schoolRouter);
app.use("/course", courseRouter);

app.listen(PORT, () => {
  console.log(`App starting at http://localhost:${PORT}`);
});
