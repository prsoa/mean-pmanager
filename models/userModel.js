var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//Create a schema
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

userSchema.pre('findOneAndUpdate', function (next) {
  var query = this;
  const password = this.getUpdate().$set.password;
  if (!password) {
      return next();
  }
  try {
      bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
          return next(err);
        }
        query.getUpdate().$set.password = hash;
        next();
      });
  } catch (error) {
      return next(error);
  }
});

//authenticate input against database
userSchema.statics.authenticate = function (email, password, callback) {
  user.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

var user = mongoose.model('user', userSchema);

module.exports = user;
