const express = require('express');
const _ = require('lodash');
const productRouter = express.Router();

const { products } = require('../data');
const Product = require('../models/product')

const auth=require('../middleware/auth');
const admin=require('../middleware/admin');

// For Products.

productRouter.route('/:id')
    .get(async (req, res) => {
        const productId = req.params.id;
        // const productById = products.find(x => x.id === parseInt(productId)); //returns object
        // if (!productById) {
        //     res.status(404);
        //     res.send("Product not found.");
        //     return;
        // }
        try {
            const productById = await Product.findById(productId).select('-__v');
            res.status(200).json(productById);
        } catch (e) {
            res.status(500).json({ message: 'Product not fount.', errorMessage: e.message })
        }

    })
    .put(async (req, res) => {
        // const productId = req.params.id;
        // const productById = products.find(x => x.id === parseInt(productId)); //returns object
        // if (!productById) {
        //     res.status(404);
        //     res.send("Product not found.");
        //     return;
        // }
        // productById.name = req.body.name;
        // res.json(products);
        try {
            const productId = req.params.id;
            const product = await Product.findByIdAndUpdate(productId, {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category
            }, { new: true });
            if (!product) {
                res.status(404).json('Product not found.');
            }
            res.status(200).json(product);
        } catch (e) {
            res.status(500).json('Update product failed.');
        }
    })
    .delete([auth,admin],async (req, res) => {
        // const productId = req.params.id;
        // const productIndex = products.findIndex(x => x.id === parseInt(productId)); //returns object
        // if (productIndex < 0) {
        //     res.status(404);
        //     res.send("Product not found.");
        //     return;
        // }
        // products.splice(productIndex, 1);
        // res.json(products);
        try {
            const productId = req.params.id;
            const product = await Product.findByIdAndDelete(productId);
            if (!product) {
                res.status(404).json('Product not found.');
            }
            res.json(product);
        } catch (e) {
            res.status(500).json({ message: 'Delete product failed.', errorMessage: e.message });
        }
    });

productRouter.route('/')
    .get(async (req, res) => {
        //res.json(products);
        try {
            //const products = await Product.find().select('_id name description price category');
            const products = await Product.find().select({ _id: true, name: true, description: true, price: true, category: true });
            //const products = await Product.find().select({__v:false});
            res.status(200).json(products);
        }
        catch (e) {
            res.status(500).json({ message: 'Something went record. Create user failed.' });
        }
    })
    .post(async (req, res) => {
        //Data can be passed as JSON or url encoded.        
        //Using spread operator
        // const newProduct = { ...req.body, id: Date.now() };
        // products.push(newProduct);
        // res.status(201).send(products);
        try {
            let product = await Product.create({ ...req.body })
            product = _.pick(product, ['_id', 'name', 'description', 'price', 'category'])
            res.status(201).send(product);
        } catch (e) {
            res.status(500).json({ message: 'Something went record. Create product failed.', errorMessage: e.message });
            //console.log('Something went record');
        }
    });

module.exports = productRouter;