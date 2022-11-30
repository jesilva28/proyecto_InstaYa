const express = require("express");
const router = express.Router();
const { Order, validator } = require("../models/order");
const validate = require("../middleware/validate");
const isValidObjectId = require("../middleware/isValidObjectId");
const asyncHandler = require("../middleware/asyncHandler");

//C = create => Crear un cliente

router.post(
    "/createorder", 
    //"/", 
    validate(validator), 
    asyncHandler(async(req, res) => {
        await Order(req.body).save();
        res.status(200).send("Orden creada");
    })
);

//R = read =>Traer todos las ordenes de la DB

router.get(
    "/orders", 
    //"/",
    asyncHandler(async(req, res) => {
        const orders = await Order.find();
        res.send(orders);
    })
);

//R = read =>Traer la orden por ID de la DB
router.get(
    "/orders/:id", 
    //"/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        const order = await Order.findById(req.params.id);
        res.json(order);
    })
);

//U = update =>
router.put(
    "/updateorder/:id", 
    //"/:id", 
    isValidObjectId,
    asyncHandler(async(req, res) => {
        await Order.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.status(200).send("Actualización exitosa");
    })
);

//D = delete =>
router.delete(
    "/:id",
    isValidObjectId,
    asyncHandler(async (req, res) => {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).send("Eliminación exitosa");
    })
);

module.exports = router;