var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var db = mongojs('mongodb://admin:mean-pmanager@ds247027.mlab.com:47027/mean-pmanager', ['tasks']);

mongoose.connect('mongodb://admin:mean-pmanager@ds247027.mlab.com:47027/mean-pmanager', { useMongoClient: true });

var Task = require('../models/taskModel');

module.exports = function(app){

  // All tasks
  app.get('/api/tasks/project/:project_id', function(req, res, next){

    Task.find({project_id: req.params.project_id}, function(err, tasks){
      if(err){
        res.send(err);
      }

      res.json(tasks);
    });

  });

  // Specific task
  app.get('/api/tasks/:id', function(req, res, next){

    Task.findOne({_id: mongoose.ObjectId(req.params.id)}, function(err, task){
      if(err){
        res.send(err);
      }

      res.json(task);
    });

  });

  // Save Task
  app.post('/api/tasks/', function(req, res, next){

    var task = req.body;

    if(!task.title || !(task.isDone + '')){
      res.status(400);
      res.json({
        "error": "Bad Data"
      });
    } else {

      task.creation_date = new Date();

      Task(task).save(function(err, task){
        if(err){
          res.send(err);
        }
        res.json(task);
      });
    }

  });

  // Delete task
  app.delete('/api/tasks/:id', function(req, res, next){

    Task.find({_id: req.params.id}).remove(function(err, task){
      if(err){
        res.send(err);
      }

      res.json(task);
    });

  });

  // Update taks
  app.put('/api/tasks/:id', function(req, res, next){
    var newTask = req.body;

    var updTask = {};

    if(newTask.isDone){
      updTask.isDone = newTask.isDone;
      updTask.finish_date = new Date();
    } else {
      updTask.isDone = false;
      updTask.finish_date = null;
    }

    if(newTask.title){
      updTask.title = newTask.title;
    }

    if(!updTask){
      res.status(400);
      res.json({
        "error":"Bad Data"
      });
    } else {
      Task.findOneAndUpdate({_id: req.params.id}, { $set: updTask}, {upsert:true}, function(err, task){
          if(err){
            res.send(err);
          }

          res.json(task);
      });
    }

  });

}
