"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebSocket = void 0;
const ws_1 = __importDefault(require("ws"));
const metrics_1 = require("../services/metrics");
const initWebSocket = (server) => {
    const wss = new ws_1.default.Server({ server });
    wss.on("connection", (ws) => {
        console.log("Client connected via WebSocket");
        (0, metrics_1.registerClient)(ws);
        ws.on("close", () => {
            console.log("WebSocket closed");
        });
    });
};
exports.initWebSocket = initWebSocket;
