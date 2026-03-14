const mongoose = require('mongoose');

const StockMovementSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  productName: { type: String, required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  warehouseName: { type: String, required: true },
  type: { type: String, enum: ['receipt', 'delivery', 'transfer-out', 'transfer-in', 'adjustment'], required: true },
  quantity: { type: Number, required: true },
  reference: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StockMovement', StockMovementSchema);