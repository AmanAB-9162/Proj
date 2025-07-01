export const metrics = {
  total: 0,
  success: 0,
  failed: 0
};

let socketClients: any[] = [];

export const registerClient = (ws: any) => {
  socketClients.push(ws);
};

export const broadcastMetrics = () => {
  const message = JSON.stringify(metrics);
  socketClients.forEach((ws, i) => {
    try {
      ws.send(message);
    } catch (e) {
      socketClients.splice(i, 1); // remove dead clients
    }
  });
};

// Periodically broadcast metrics to all clients every second
setInterval(() => {
  broadcastMetrics();
}, 1000);
