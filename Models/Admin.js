const mongoose = require('mongoose');

// Define the Admin schema
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Create the Admin model
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
