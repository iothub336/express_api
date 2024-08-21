const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// GET route to display date, time, version, and build number
app.get('/test', (req, res) => {
    const now = new Date();
    const dateTime = now.toLocaleString();

    res.send(`Hello! The date and time is: ${dateTime}. Version: 1.1, Build Number: 1`);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
