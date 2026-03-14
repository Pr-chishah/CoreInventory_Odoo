const mongoose = require('mongoose');

const TransferLineSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const TransferSchema = new mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  sourceWarehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  destinationWarehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  lines: { type: [TransferLineSchema], default: [] },
  status: { type: String, enum: ['draft', 'ready', 'transferred'], default: 'draft' },
  scheduledDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transfer', TransferSchema);