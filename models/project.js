const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Project', projectSchema);