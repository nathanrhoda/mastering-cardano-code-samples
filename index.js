const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Add error handling
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log('Received request for /');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add error handling for the server
const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Serving files from: ${path.join(__dirname, 'public')}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});

// Keep the process running
process.stdin.resume();