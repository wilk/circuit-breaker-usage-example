import express from "express";
import { v4 as uuid } from "uuid";

const PORT = 5000;

const app = express();

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

app.get("/api/clients/:clientId/invoices", async (_, res) => {
  await delay(500);
  return res.json([
    {
      id: uuid(),
    },
    { id: uuid() },
    { id: uuid() },
  ]);
});

app.listen(PORT, () =>
  console.log(`GestioneFatture listening on port ${PORT}`)
);
