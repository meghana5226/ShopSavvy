const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

// ✅ Load environment variables
dotenv.config();

// ✅ Connect to MongoDB
connectDB();

// ✅ Create express app
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("API Running ✅");
});

// ✅ Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
