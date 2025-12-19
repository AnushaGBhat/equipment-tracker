console.log("SERVER FILE LOADED");

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


const DATA_FILE = path.join(__dirname, "data.json");


app.get("/", (req, res) => {
  res.send("SERVER IS ALIVE");
});


function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}


function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET all equipment
app.get("/api/equipment", (req, res) => {
  const equipment = readData();
  res.json(equipment);
});

// ADD new equipment
app.post("/api/equipment", (req, res) => {
  const equipment = readData();

  const newItem = {
    id: Date.now(),
    name: req.body.name,
    type: req.body.type,
    status: req.body.status,
    lastCleaned: req.body.lastCleaned
  };

  equipment.push(newItem);
  writeData(equipment);

  res.json(newItem);
});

// UPDATE equipment
app.put("/api/equipment/:id", (req, res) => {
  const equipment = readData();
  const id = Number(req.params.id);

  const updated = equipment.map(item =>
    item.id === id ? { ...item, ...req.body } : item
  );

  writeData(updated);
  res.json({ message: "Equipment updated" });
});

// DELETE equipment
app.delete("/api/equipment/:id", (req, res) => {
  const equipment = readData();
  const id = Number(req.params.id);

  const filtered = equipment.filter(item => item.id !== id);
  writeData(filtered);

  res.json({ message: "Equipment deleted" });
});


const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
