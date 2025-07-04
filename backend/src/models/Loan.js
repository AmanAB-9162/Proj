"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const loanSchema = new mongoose_1.default.Schema({
    applicantId: String,
    loanAmount: Number,
    email: String,
    timestamp: { type: Date, default: Date.now },
    status: String,
    error: String
});
exports.default = mongoose_1.default.model("Loan", loanSchema);
