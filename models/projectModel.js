var mongoose = require('mongoose');

//Create a schema
var projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user_id: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required: true
  }
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
