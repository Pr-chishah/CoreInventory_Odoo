const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  category: { type: String, required: false },
  unitOfMeasure: { type: String, default: 'pcs' },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);