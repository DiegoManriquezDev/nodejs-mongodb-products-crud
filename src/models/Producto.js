import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    descripcion: {
        type: String,
    },
    precioMayorista: {
        type: String,
        required: true
    },
    precioMinorista: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

export default model('Producto', productoSchema);