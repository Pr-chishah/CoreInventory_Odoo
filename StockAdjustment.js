const mongoose = require('mongoose');

const StockAdjustmentSchema = new mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  systemQty: { type: Number, required: true },
  countedQty: { type: Number, required: true },
  difference: { type: Number, required: true },
  reason: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StockAdjustment', StockAdjustmentSchema);