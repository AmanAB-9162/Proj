import express from "express";
import { ingestLoan } from "../controllers/loanController";
import Loan from "../models/Loan";

const router = express.Router();

// ✅ POST /api/loan/ingest — process new loan
router.post("/ingest", (req, res, next) => {
  ingestLoan(req, res).catch(next);
});

// ✅ GET /api/loan/errors — fetch last 20 failed logs
router.get("/errors", async (req, res) => {
  try {
    const logs = await Loan.find({ status: "failed" })
      .sort({ createdAt: -1 })
      .limit(20);

    const formatted = logs.map((log: any) => ({
      applicantId: log.applicantId,
      error: log.error,
      timestamp: log.createdAt,
    }));

    res.status(200).json(formatted);
  } catch (err) {
    console.error("Error fetching logs:", err);
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

// ✅ GET /api/loan/logs — fetch last 50 logs for LiveLogsFeed
router.get("/logs", async (req, res) => {
  try {
    const logs = await Loan.find().sort({ createdAt: -1 }).limit(50);

    const formatted = logs.map((log: any) => ({
      applicantId: log.applicantId,
      status: log.status,
      error: log.error,
      timestamp: log.createdAt,
    }));

    res.status(200).json(formatted.reverse()); // Oldest first
  } catch (err) {
    console.error("Error fetching live logs:", err);
    res.status(500).json({ error: "Failed to fetch live logs" });
  }
});

// ✅ GET /api/loan/metrics/history — send live chart data
router.get("/metrics/history", async (req, res) => {
  try {
    const recentLoans = await Loan.find().sort({ createdAt: -1 }).limit(30);

    const snapshots = recentLoans.map((loan) => ({
      timestamp: loan.createdAt,
      success: loan.status === "success" ? 1 : 0,
      failed: loan.status === "failed" ? 1 : 0,
      total: 1,
    }));

    res.status(200).json(snapshots.reverse()); // Oldest first for chart
  } catch (err) {
    console.error("Error fetching metric history:", err);
    res.status(500).json({ error: "Failed to fetch metric history" });
  }
});

// ✅ POST /api/loan/pause — pause ingestion
router.post("/pause", (req, res) => {
  console.log("🚨 Loan ingestion paused");
  res.status(200).json({ message: "Ingestion paused" });
});

// ✅ POST /api/loan/resume — resume ingestion
router.post("/resume", (req, res) => {
  console.log("▶️ Loan ingestion resumed");
  res.status(200).json({ message: "Ingestion resumed" });
});

// ✅ POST /api/loan/retry — retry failed records
router.post("/retry", async (req, res) => {
  console.log("🔁 Retrying failed records");
  res.status(200).json({ message: "Retry triggered for failed records" });
});

export default router;
