const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI);

let db;

// Connect MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db("outproIndia");

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

// Home
app.get("/", (req, res) => {
  res.send("Outpro.India Backend is running!");
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    console.log("Contact form received:");
    console.log(req.body);

    // Save enquiry to MongoDB
    const result = await db.collection("enquiries").insertOne({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      createdAt: new Date()
    });

    console.log("MongoDB saved:", result.insertedId);

    res.json({
      success: true,
      message: "Enquiry received successfully!",
      id: result.insertedId
    });

  } catch (error) {
    console.error("Error saving enquiry:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save enquiry"
    });
  }
});

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});