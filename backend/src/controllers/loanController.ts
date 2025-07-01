// backend/src/controllers/loanController.ts
import { Request, Response } from "express";
import { validateLoan } from "../utils/validate";
import Loan from "../models/Loan";
import { metrics, broadcastMetrics } from "../services/metrics";

export const ingestLoan = async (req: Request, res: Response) => {
  const data = req.body;

  metrics.total += 1;
  const result = validateLoan(data);

  if (!result.success) {
    await Loan.create({ ...data, status: "failed", error: result.error });
    metrics.failed += 1;
    broadcastMetrics();
    return res.status(400).json({ error: result.error });
  }

  await Loan.create({ ...data, status: "success" });
  metrics.success += 1;
  broadcastMetrics();

  return res.status(200).json({ message: "Processed" });
};
