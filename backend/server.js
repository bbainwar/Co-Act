const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
var cookieParser = require("cookie-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const passportSetup = require("./passport");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cookieSession({
    name: "session",
    keys: ["roatt"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});


const authRouter = require("./routes/auth");

const adminRouter = require("./routes/admin");

const contentsRouter = require("./routes/contents");

const settingsRouter = require("./routes/settings");

const cospaceRouter = require("./routes/cospace");

const taskRouter = require("./routes/task");

const userRouter = require("./routes/user");

const todoRouter = require("./routes/todo");

app.use("/auth", authRouter);

app.use("/admin", adminRouter);

app.use("/contents", contentsRouter);

app.use("/settings", settingsRouter);

app.use("/cospace", cospaceRouter);

app.use("/task", taskRouter);

app.use("/user", userRouter);

app.use("/todo", todoRouter);

app.use((req, res) => {
  res.send(
    "Sorry! The page you are looking for is currently unavailable. Kindly contact bbainwar@gmail.com if you have any queries!"
  );
});
