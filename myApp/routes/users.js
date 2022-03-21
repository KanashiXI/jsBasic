var express = require('express');
var router = express.Router();
var usersModel = require('../model/users');
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    var user = await usersModel.find()
    res.send({
        message: "success",
        data: user
    })
  }
  catch(err){
      console.log(err)
      res.status(500).send({
          message: "error"
      
      })

  }
});

router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)){
      res.status(400).send({
        message: "Invalid ID",
      })
    }else{
      var user = await usersModel.findById(id)
      // var product = await productModel.find({_id:mongoose.Types.ObjectId(id)})
      res.send({
        message: "success",
        data: user
      })
    }
  }
  catch(err){
      console.log(err)
      res.status(500).send({
          message: "error"
      
      })

  }
});

router.post('/', async(req, res) => {
  try{
      var {username, password, user_name, user_surname, user_telephone} = req.body
      var newUser = new usersModel({
          username: username,
          password: password,
          user_name: user_name,
          user_surname: user_surname,
          user_telephone: user_telephone,
      });
      var user = await newUser.save();
      res.status(201).send({
          data: user,
          message: "create success",
      })
  }catch (error){
      console.log(error)
      res.status(500).send({
          message: "err"
      
      })
      
  }
})

router.put('/:id', async(req, res) => {
  try{
      let id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)){
          res.status(400).send({
              message: "Invalid ID",
          })
      }else{
          var {username, password, user_name, user_surname, user_telephone} = req.body
          await usersModel.updateOne(
              {
                  _id:mongoose.Types.ObjectId(id)
              },
              {
                  $set: {
                      username: username,
                      password: password,
                      user_name: user_name,
                      user_surname: user_surname,
                      user_telephone: user_telephone
                  }
              }
          )
          let user = await usersModel.findById(id)

          res.send({
              message: "success",
              data: user
          })
      }
  }
  catch(err){
      console.log(err)
      res.status(500).send({
          message: "error"
      
      })

  }
})

router.delete('/:id', async(req, res) => {
  try{
      let id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)){
          res.status(400).send({
              message: "Invalid ID",
          })
      }else{
          await usersModel.deleteOne({_id: mongoose.Types.ObjectId(id)})

          res.send({
              message: "delete success"
          })
      }
  }
  catch(err){
      console.log(err)
      res.status(500).send({
          message: "error"
      
      })

  }
})

module.exports = router;
