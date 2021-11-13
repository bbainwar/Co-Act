const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

const usersRouter = require('./routes/users');

const adminRouter = require('./routes/admin');

const contentsRouter = require('./routes/contents');

const settingsRouter = require('./routes/settings');

app.use('/users', usersRouter);

app.use('/admin', adminRouter);

app.use('/contents', contentsRouter);

app.use('/settings', settingsRouter);

app.use((req, res) => {
    res.send("Sorry! The page you are looking for is currently unavailable. Kindly contact bbainwar@gmail.com if you have any queries!");
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});