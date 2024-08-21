const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// GET route to display date, time, version, and build number
app.get('/test', (req, res) => {
    const now = new Date();
    const dateTime = now.toLocaleString();

    res.send(`Hello there! The date and time is: ${dateTime}. Version: 1.2, Build Number: 2`);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
