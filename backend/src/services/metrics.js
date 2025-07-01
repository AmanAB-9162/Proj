"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastMetrics = exports.registerClient = exports.metrics = void 0;
exports.metrics = {
    total: 0,
    success: 0,
    failed: 0
};
let socketClients = [];
const registerClient = (ws) => {
    socketClients.push(ws);
};
exports.registerClient = registerClient;
const broadcastMetrics = () => {
    const message = JSON.stringify(exports.metrics);
    socketClients.forEach((ws, i) => {
        try {
            ws.send(message);
        }
        catch (e) {
            socketClients.splice(i, 1); // remove dead clients
        }
    });
};
exports.broadcastMetrics = broadcastMetrics;
