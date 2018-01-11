var mongoose = require('mongoose');

//Create a schema
var taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isDone: Boolean,
  creation_date: {
    type: Date,
    required: true,
  },
  finish_date: Date,
  project_id: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Project",
    required: true
  }
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
