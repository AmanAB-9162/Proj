"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/loanRoutes.ts
const express_1 = __importDefault(require("express"));
const loanController_1 = require("../controllers/loanController");
const router = express_1.default.Router();
// ✅ Force TS to treat ingestLoan as middleware
router.post("/ingest", (req, res, next) => {
    (0, loanController_1.ingestLoan)(req, res).catch(next);
});
exports.default = router;
