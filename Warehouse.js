const mongoose = require('mongoose');

const WarehouseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Warehouse', WarehouseSchema);