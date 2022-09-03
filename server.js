const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



/*mongodb://localhost:27017/lmsDb */

mongoose.connect("mongodb+srv://user1:password@cluster0.ngscudm.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const sensorsRouter = require('./routes/sensors');

app.use('/sensors', sensorsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

