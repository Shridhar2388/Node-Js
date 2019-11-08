const express = require('express');

const productRouter = express.Router();

const { products } = require('../data');


// For Products.

productRouter.route('/:id')
    .get((req, res) => {
        const productId = req.params.id;
        const productById = products.find(x => x.id === parseInt(productId)); //returns object
        if (!productById) {
            res.status(404);
            res.send("Product not found.");
            return;
        }
        res.json(products);
    })
    .put((req, res) => {
        const productId = req.params.id;
        const productById = products.find(x => x.id === parseInt(productId)); //returns object
        if (!productById) {
            res.status(404);
            res.send("Product not found.");
            return;
        }
        productById.name = req.body.name;
        res.json(products);
    })
    .delete((req, res) => {
        const productId = req.params.id;
        const productIndex = products.findIndex(x => x.id === parseInt(productId)); //returns object
        if (productIndex < 0) {
            res.status(404);
            res.send("Product not found.");
            return;
        }
        products.splice(productIndex, 1);
        res.json(products);
    });

productRouter.route('/')
    .get((req, res) => {
        res.json(products);
    })
    .post((req, res) => {
        //Data can be passed as JSON or url encoded.        
        //Using spread operator
        const newProduct = { ...req.body, id: Date.now() };
        products.push(newProduct);
        res.status(201).send(products);
    });

module.exports = productRouter;