var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

mongoose.connect('mongodb://admin:mean-pmanager@ds247027.mlab.com:47027/mean-pmanager', { useMongoClient: true });

var User = require('../models/userModel');

module.exports = function(app){

  // Register
  app.get('/users/register', function(req, res, next){

      res.render('users/register', {session: req.session});

  });

  // Save User
  app.post('/users/register', function(req, res, next){

    var user = req.body;

    if (user.email && user.name && user.password && user.passwordConf) {
      var userData = {
        email: user.email,
        name: user.name,
        password: user.password
      }

      if(user.password === user.passwordConf) {
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
          if (err) {
            return res.send(err);
          } else {
            req.session.userId = user._id;
            req.session.userName = user.name;
            req.session.userEmail = user.email;
            return res.redirect('/');
          }
        });
      } else {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("Passwords don't match");
        return next(err);
      }
    }

  });

  // view Log In Form
  app.get('/users/login', function(req, res, next){

      res.render('users/login', {session: req.session});

  });

  // Log In
  app.post('/users/login', function(req, res, next){

    var user = req.body;

    if (user.email && user.password) {
      User.authenticate(user.email, user.password, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          req.session.userName = user.name;
          req.session.userEmail = user.email;
          return res.redirect('/');
        }
      });
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }

  });

  app.get('/users/logout', function (req, res, next) {
    if (req.session.userId) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        }
      });
    }

    return res.redirect('/');
  });

  // Edit Profile
  app.get('/users/profile', function(req, res, next){
    if (req.session.userId) {
      User.findOne({_id: req.session.userId}, function(err, user){
        if(err){
          res.send(err);
        }

        res.render('users/profile', {session: req.session, user: user, success: false});
      });
    } else {
      return res.redirect('/');
    }

  });

  // Save Profile
  app.post('/users/profile', function(req, res, next){

    var newUser = req.body;

    if (req.session.userId && newUser.password) {

      // Authenticate using the session email because the user can change the email from the form
      User.authenticate(req.session.userEmail, newUser.password, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong password.');
          err.status = 401;
          return next(err);
        } else { // Valid authentication

          var updUser = {};

          if(newUser.name){
            updUser.name = newUser.name;
          }

          if(newUser.email){
            updUser.email = newUser.email;
          }

          if(newUser.passwordNew && newUser.passwordConf){
            if(newUser.passwordNew === newUser.passwordConf) {
              updUser.password = newUser.passwordNew;
            }
          }

          User.findOneAndUpdate({ _id: req.session.userId }, { $set: updUser}, {new: true}, function (err, resUser) {
            if (err) return handleError(err);

            req.session.userId = resUser._id;
            req.session.userName = resUser.name;
            req.session.userEmail = resUser.email;

            res.render('users/profile', {session: req.session, user: resUser, success: true});
          });

        }
      });

    } else {
      res.status = 500;
      return res.send('Unable to make changes. Please confirm that the current password was provided.');
    }

  });

  // Delete user
  app.delete('/api/users/:id', function(req, res, next){

    User.find({_id: req.params.id}).remove(function(err, user){
      if(err){
        res.send(err);
      }

      res.json(user);
    });

  });

  // Update taks
  app.put('/api/users/:id', function(req, res, next){
    var newUser = req.body;

    var updUser = {};

    if(newUser.isDone){
      updUser.isDone = newUser.isDone;
      updUser.finish_date = new Date();
    } else {
      updUser.isDone = false;
      updUser.finish_date = null;
    }

    if(newUser.title){
      updUser.title = newUser.title;
    }

    if(!updUser){
      res.status(400);
      res.json({
        "error":"Bad Data"
      });
    } else {

      User.findOneAndUpdate({_id: req.params.id}, { $set: updUser}, {upsert:true}, function(err, user){
          if(err){
            res.send(err);
          }

          res.json(user);
      });
    }

  });

}
