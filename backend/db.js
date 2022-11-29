const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");

module.exports = asyncHandler(async () => {
    const dbo= await mongoose.connect(
        "mongodb://127.0.0.1:27017/ordersDB"
    );
    dbo
        ? console.log("Conexión a la BD exitosa...")
        : console.log("Error en la conexión");
});

