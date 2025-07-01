import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    applicantId: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    email: { type: String, required: true },
    status: { type: String, enum: ["success", "failed"], required: true },
    error: { type: String, default: null },
  },
  {
    timestamps: true, // ✅ adds createdAt & updatedAt
  }
);

const Loan = mongoose.model("Loan", loanSchema);
export default Loan;
