const mongoose = require('mongoose');

const ReceiptLineSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const ReceiptSchema = new mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  supplier: { type: String, required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  lines: { type: [ReceiptLineSchema], default: [] },
  status: { type: String, enum: ['draft', 'ready', 'received'], default: 'draft' },
  scheduledDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Receipt', ReceiptSchema);