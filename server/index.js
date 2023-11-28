const express = require("express");
const app = express();
const { OpenAI } = require("openai");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.listen(3000, () => {
  console.log("app listening on port 3000");
});

const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});

// https://chat.openai.com/share/b175130a-0d77-465e-8187-59b92590df8b

app.post("/chat", async (req, res) => {
  try {
    const resp = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.question }],
    });

    res.status(200).json({ message: resp.choices[0].message.content });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});
