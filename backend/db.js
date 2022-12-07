const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");

module.exports = asyncHandler(async () => {
    const dbo= await mongoose.connect(
        "mongodb+srv://jesilva:jesilva@cluster0.mcgwnsm.mongodb.net/test"
    );
    dbo
        ? console.log("Conexión a la BD exitosa...")
        : console.log("Error en la conexión");
});

