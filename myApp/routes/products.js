var express = require('express');
var router = express.Router();
var productModel = require('../model/products')
var mongoose = require('mongoose');

router.get('/', async(req, res) => {
    try {
        var product = await productModel.find()
        res.send({
            message: "success",
            data: product
        })
    }
    catch(err){
        console.log(err)
        res.status(500).send({
            message: "error"
        
        })

    }
})

router.get('/:id', async(req, res) => {
    try {
        let id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).send({
                message: "Invalid ID",
            })
        }else{
            var product = await productModel.findById(id)
            // var product = await productModel.find({_id:mongoose.Types.ObjectId(id)})
            res.send({
                message: "success",
                data: product
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

router.post('/', async(req, res) => {
    try{
        var {products_name, price, amount, detail} = req.body
        var newProduct = new productModel({
            products_name: products_name,
            price: price,
            amount: amount,
            detail: detail,
        });
        var product = await newProduct.save();
        res.status(201).send({
            data: product,
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
            var {products_name, price, amount, detail} = req.body
            await productModel.updateOne(
                {
                    _id:mongoose.Types.ObjectId(id)
                },
                {
                    $set: {
                        products_name: products_name,
                        price: price,
                        amount: amount,
                        detail: detail
                    }
                }
            )
            let product = await productModel.findById(id)

            res.send({
                message: "success",
                data: product
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
            await productModel.deleteOne({_id: mongoose.Types.ObjectId(id)})

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