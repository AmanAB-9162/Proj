import { Server } from "http";
import WebSocket from "ws";
import { registerClient } from "../services/metrics";

export const initWebSocket = (server: Server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("Client connected via WebSocket");
    registerClient(ws);

    ws.on("close", () => {
      console.log("WebSocket closed");
    });
  });
};
