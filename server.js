// server.js (Serving HTML, Handling Login, and Calculator API)

const express = require('express');
const app = express();

// Configuration for Docker/Container compatibility
const port = 3000; 
const host = '0.0.0.0'; // Essential for accessing the server from outside the container

// --- MIDDLEWARE ---

// 1. Serve Static Files
app.use(express.static('public'));

// 2. Parse request bodies (JSON for API, URL-encoded for basic forms)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// --- ROUTES ---

// POST /login Route - Returns JSON for dynamic frontend handling
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check for the hardcoded credentials
  if (username === 'admin' && password === 'admin') {
    // SUCCESS: Send a JSON response
    res.status(200).json({ 
        success: true, 
        message: `Login Successful! Welcome, ${username}.` 
    });
  } else {
    // FAILURE: Send an error JSON response
    res.status(401).json({ 
        success: false, 
        message: 'Authentication Failed: Invalid username or password.' 
    });
  }
});

// POST /add Route - API for adding two numbers
app.post('/add', (req, res) => {
  // Extract numbers from the JSON request body
  const { number1, number2 } = req.body;

  // Input validation
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ 
        error: 'Invalid input. Please provide valid numbers for number1 and number2.' 
    });
  }

  // Calculate the sum
  const sum = num1 + num2;

  // Send the result as a JSON response
  res.status(200).json({
    success: true,
    result: sum,
    message: `${num1} + ${num2} equals ${sum}`
  });
}); // <-- Closing brace and parenthesis for the /add route

// Start the server
app.listen(port, host, () => {
  console.log(`Web server running at http://localhost:${port}/`);
});
