import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import loanRoutes from "./app";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/loan", loanRoutes);

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
  })
  .catch(err => console.error(err));
