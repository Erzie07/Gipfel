const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve assets folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Default route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Privacy Policy route
app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy-policy/index.html'));
});

// Terms and Conditions route
app.get('/terms-and-conditions', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms-and-conditions/index.html'));
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Hevy app server running on port ${PORT} ✨`);
  console.log(`Server started at: http://localhost:${PORT}`);
});
