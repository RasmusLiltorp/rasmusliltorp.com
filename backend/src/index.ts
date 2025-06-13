import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});