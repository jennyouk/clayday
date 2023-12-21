const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Hint: Why is bcrypt required here?
 */

const projectSchema = new Schema({
  nickname: { type: String, required: true },
  phase: { type: String, required: true },
  remind: { type: Boolean, required: false },
  days: { type: Number, required: false },
  notes: { type: String, required: false },
  user: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('project', projectSchema);
