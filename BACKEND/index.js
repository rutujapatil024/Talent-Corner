const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://niranjan:12345@cluster0.ppbre.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Create a schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  interest: String,
}, { timestamps: true }); 


const Form = mongoose.model("Form", formSchema);

// POST route to save form data
app.post("/api/form", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).send({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).send({ error: "Failed to submit form" });
  }
});
// GET route to retrieve all form data
app.get("/api/form", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 }); 
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch form data" });
  }
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
