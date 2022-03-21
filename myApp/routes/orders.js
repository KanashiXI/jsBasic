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
        var {buyer, order, amount} = req.body
        var newOrder = new ordersModel({
            buyer: buyer,
            order: order,
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

module.exports = router;