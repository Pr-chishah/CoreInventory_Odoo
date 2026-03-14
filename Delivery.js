const mongoose = require('mongoose');

const DeliveryLineSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const DeliverySchema = new mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  customer: { type: String, required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  lines: { type: [DeliveryLineSchema], default: [] },
  status: { type: String, enum: ['draft', 'ready', 'delivered'], default: 'draft' },
  scheduledDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Delivery', DeliverySchema);