const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());

const apiKey = process.env.AIzaSyDkgWOYFtbGs5ILSUCdV0CFVQvaRl07Fzc;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro",
});

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

// Chatbot API endpoint
app.post("/api/chatbot", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ],
    });

    const result = await chatSession.sendMessage(userMessage);
    res.json({ response: result.response.text });
  } catch (error) {
    console.error("Error in chatbot response:", error);
    res.status(500).json({ error: "Failed to get response from chatbot." });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


const chatDisplay = document.getElementById("chat-display");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (!message) return;

  displayMessage("user", message);
  userInput.value = "";

  try {
    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    displayMessage("bot", data.response || "Sorry, I couldn't understand that.");
  } catch (error) {
    displayMessage("bot", "There was an error processing your request.");
  }
});

function displayMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageElement.textContent = message;
  chatDisplay.appendChild(messageElement);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
