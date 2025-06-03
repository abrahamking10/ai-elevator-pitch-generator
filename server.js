// Import required packages
const express = require("express");           // Handles HTTP requests
const cors = require("cors");                 // Lets frontend talk to backend (cross-origin)
const dotenv = require("dotenv");             // Loads secret keys from .env file

// Load environment variables
dotenv.config();

// Create the Express app
const app = express();

// Middleware to parse JSON and allow CORS
app.use(express.json());                      // Allows JSON body in POST requests
app.use(cors());                              // Enables cross-origin requests (frontend ↔ backend)

// Route to handle resume generation
app.post("/generate-resume", async (req, res) => {
  const formData = req.body;                  // This is the data sent from the frontend

  console.log("Received data from frontend:", formData);

  // Later you'll call Groq here — for now just send back a dummy message
  const fakeResponse = {
    message: `✅ Got it, ${formData.Name}. I will generate a ${formData.Tone.toLowerCase()} resume with your experience in ${formData.Skill} using under ${formData.Characters} characters.`
  };

  res.json(fakeResponse);                     // Send the dummy resume response to frontend
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
