const mongoose = require("mongoose");
const Joi = require("joi");

const orderSchema = mongoose.Schema({
    fecha:{
        type: Date,
        required: true
    },
    hora:{
        type: String,
        required: true
    },
    largo:{
        type: Number,
        required: true
    },
    Ancho:{
        type: Number,
        required: true
    },
    peso:{
        type: Number,
        required: true
    },
    dir_r:{
        type: String,
        required: true
    },
    ciudad_r:{
        type: String,
        required: true
    },
    nombre_d:{
        type: String,
        required: true
    },
    cedula:{
        type: String,
        required: true
    },
    dir_e:{
        type: String,
        required: true
    },
    ciudad_e:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
});

const Order = mongoose.model("order", orderSchema);

const validator = (data) => {
    const schema = Joi.object({
        fecha: Joi.date().required(),
        hora: Joi.string().required(),
        largo: Joi.number().required(),
        Ancho: Joi.number().required(),
        peso: Joi.number().required(),
        dir_r: Joi.string().required(),
        ciudad_r: Joi.string().required(),
        nombre_d: Joi.string().required(),
        cedula: Joi.string().required(),
        dir_e: Joi.string().required(),
        ciudad_e: Joi.string().required(),
        estado: Joi.string().required()
    })
    return schema.validate(data)
};


module.exports = {Order, validator};