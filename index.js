const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, MongoDB!');
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
