const express = require('express');
const router = express.Router();

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
    error.push({ msg: 'Password do not match'});
  }

})

module.exports = router;