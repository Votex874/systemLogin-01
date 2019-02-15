const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/User')

// Login Page
router.get('/login', (req, res) => res.render('Login'))


// register Page
router.get('/register', (req, res) => res.render('register'))

// Register handle
router.post('/register',  (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //Check required fields
  if(!name || !email || !password || !password2){
    errors.push({ msg: 'Please fill in all fields'});
  }

  // Check passwords match
  if(password !== password2){
    errors.push({ msg: 'Password do not match'});
  }

  //  Check pass length
  if(password.length < 6){
    errors.push({ msg: 'Password should be atleast 6 characters'})
  }

  if(errors.length > 0){
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    })
  } else {
    // Validation passed
    User.findOne({ email: email })
    .then(user => {
      if (user) {
        // User exist
        errors.push({ msg: 'Email is already registered' })
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        })
      } else {

      }
    });
  }

})

module.exports = router;