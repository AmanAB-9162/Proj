"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoan = void 0;
const zod_1 = require("zod");
const loanSchema = zod_1.z.object({
    applicantId: zod_1.z.string().min(1),
    loanAmount: zod_1.z.number().positive(),
    email: zod_1.z.string().email()
});
const validateLoan = (data) => {
    try {
        loanSchema.parse(data);
        return { success: true };
    }
    catch (e) {
        return { success: false, error: e.errors[0].message };
    }
};
exports.validateLoan = validateLoan;
