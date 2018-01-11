var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var db = mongojs('mongodb://admin:mean-pmanager@ds247027.mlab.com:47027/mean-pmanager', ['projects']);

mongoose.connect('mongodb://admin:mean-pmanager@ds247027.mlab.com:47027/mean-pmanager', { useMongoClient: true });

var Project = require('../models/projectModel');
var Task = require('../models/taskModel');

module.exports = function(app){

  // All projects
  app.get('/api/projects', function(req, res, next){

    if(req.session.userId) {
      Project.find({user_id: req.session.userId}, function(err, projects){
        if(err){
          res.send(err);
        }

        res.json(projects);
      });
    } else {
      res.send('Not authorized to view projects');
    }

  });

  // Specific project
  app.get('/api/projects/:id', function(req, res, next){

    Project.findOne({_id: mongoose.ObjectId(req.params.id)}, function(err, project){
      if(err){
        res.send(err);
      }

      res.json(project);
    });

  });

  // Save Project
  app.post('/api/projects/', function(req, res, next){

    var project = req.body;

    if(!project.title || !req.session.userId){
      res.status(400);
      res.json({
        "error": "Bad Data"
      });
    } else {

      project.user_id = req.session.userId;

      Project(project).save(function(err, project){
        if(err){
          res.send(err);
        }
        res.json(project);
      });
    }

  });

  // Delete project
  app.delete('/api/projects/:id', function(req, res, next){

    Task.find({project_id: req.params.id}).remove(function(err, project){
      if(err){
        res.send(err);
      }

      Project.find({_id: req.params.id}).remove(function(err, project){
        if(err){
          res.send(err);
        }

        res.json(project);
      });
    });



  });

  // Update taks
  app.put('/api/projects/:id', function(req, res, next){
    var newProject = req.body;

    var updProject = {};

    if(newProject.isDone){
      updProject.isDone = newProject.isDone;
      updProject.finish_date = new Date();
    } else {
      updProject.isDone = false;
      updProject.finish_date = null;
    }

    if(newProject.title){
      updProject.title = newProject.title;
    }

    if(!updProject){
      res.status(400);
      res.json({
        "error":"Bad Data"
      });
    } else {
      Project.findOneAndUpdate({_id: req.params.id}, { $set: updProject}, {upsert:true}, function(err, project){
          if(err){
            res.send(err);
          }

          res.json(project);
      });
    }

  });

}
