// server/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => { // Basic test route
    res.send('Chatbot backend is running!');
});

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  console.log('Received message from client:', userMessage);

  // Placeholder response - actual LLM call will be later
  res.json({ 
    reply: `Backend received: "${userMessage}". LLM integration is pending.`,
    sender: 'bot' // Ensure sender is 'bot' for consistency
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
