var express = require('express');
var router = express.Router();
var ordersModel = require('../model/orders');
var mongoose = require('mongoose');

router.get('/', async(req, res) => {
    try{
        var orders = await ordersModel.find()
        res.send({
            message: 'success',
            data: orders
        })
    }
    catch (err){
        console.log(err)
        res.status(500).send({
            message: 'error'
        })
    }
})

router.post('/', async(req, res) => {
    try{
        var {buyer, order_name, amount} = req.body
        var newOrder = new ordersModel({
            buyer: buyer,
            order_name: order_name,
            amount: amount
        })

        var order = await newOrder.save()

        res.status(201).send({
            message: 'success',
            data: order
        })

    }
    catch(err){
        console.log(err)
        res.status(500).send({
            message: 'error'
        })
    }
})

// router.get('/:name', async(res, req) => {
//     try{
//         let name = req.params.name

//         var order_name = await ordersModel.findOneAndUpdate()
//         // if(!mongoose.Types.ObjectId.isValid()){
//         //     res.status(400).send({
//         //         message: 'Invalid ID'
//         //     })
//         // }else{
//         //     var {buyer, order_name, amount} = req.body
//         //     var order = await ordersModel.findOneAndUpdate()
//         // }
//     }
//     catch{

//     }
// })

// router.put('/:order_name',async (res, req) => {
//     try{
//         var order = req.params.order_name

//         if (ordersModel.find(order_name:order_name))
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).send({
//             message: 'error'
//         })
//     }
// })

module.exports = router;