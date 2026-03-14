const mongoose = require('mongoose');

const StockBalanceSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  quantity: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

StockBalanceSchema.index({ productId: 1, warehouseId: 1 }, { unique: true });

module.exports = mongoose.model('StockBalance', StockBalanceSchema);