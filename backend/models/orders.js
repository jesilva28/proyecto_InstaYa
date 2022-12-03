const mongoose = require("mongoose");
const Joi = require("joi");

const orderSchema = mongoose.Schema({
    fecha:{
        type: String,
        required: true
    },
    hora:{
        type: String,
        required: true
    },
    largo:{
        type: String,
        required: true
    },
    ancho:{
        type: String,
        required: true
    },
    peso:{
        type: String,
        required: true
    },
    dirRecogida:{
        type: String,
        required: true
    },
    ciudadRecogida:{
        type: String,
        required: true
    },
    nombreDestinatario:{
        type: String,
        required: true
    },
    cedulaDestinatario:{
        type: String,
        required: true
    },
    dirEntrega:{
        type: String,
        required: true
    },
    ciudadEntrega:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true,
        default: "Guardado"
    },
});

const Order = mongoose.model("order", orderSchema);

const validator = (data) => {
    const schema = Joi.object({
        fecha: Joi.string().required(),
        hora: Joi.string().required(),
        largo: Joi.string().required(),
        ancho: Joi.string().required(),
        peso: Joi.string().required(),
        dirRecogida: Joi.string().required(),
        ciudadRecogida: Joi.string().required(),
        nombreDestinatario: Joi.string().required(),
        cedulaDestinatario: Joi.string().required(),
        dirEntrega: Joi.string().required(),
        ciudadEntrega: Joi.string().required(),
        // estado: Joi.string().required()
    })
    return schema.validate(data)
};


module.exports = {Order, validator};