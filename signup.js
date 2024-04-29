const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy database (replace with actual database)
const users = []; // Change 'signup' to 'users' for consistency

// Serve static files
app.use(express.static('cooks')); // Assuming 'cooks' is the directory where your static files are located

// Signup endpoint
app.post('/signup', async (req, res) => {
  try {
    // Extract user data from request body
    const { name, email, password, userType } = req.body;

    // Check if any of the required fields are missing
    if (!name || !email || !password || !userType) {
      throw new Error('All fields are required');
    }

    // Check if user with same email already exists
    if (users.find(user => user.email === email)) {
      throw new Error('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to database
    users.push({ name, email, password: hashedPassword, userType });

    // Return success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Return error response
    res.status(400).json({ error: error.message });
  }
});

// Serve your signup.html file
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
