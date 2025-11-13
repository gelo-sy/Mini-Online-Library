const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();


// middleware
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// mongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB is connected!"))
    .catch(err => console.error("MongoDB connection failed! ", err));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port', PORT));

// website/browser
app.get('/', (req, res) => res.send('API is running!'));


