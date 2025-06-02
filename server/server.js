const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load users from users.json
const usersFilePath = path.join(__dirname, 'users.json');

function getUsers() {
  const data = fs.readFileSync(usersFilePath, 'utf8');
  return JSON.parse(data);
}

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  const users = getUsers();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.json({ success: true, message: 'Login successful', username: user.username });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
