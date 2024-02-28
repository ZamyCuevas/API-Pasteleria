import { Schema, model } from "mongoose";

const pasteleriaSchema = new Schema({
    codigo: {
        type: String,
        unique: true,
        required: true
    },
    nombre: String, 
    sabor: String,
    precio: Number,
    costo: Number,
    stock: Number,
    fechaProduccion: String,
    fechaCaducidad: String
}, {
    versionKey: false,
    timestamps: true
});

export default model('pasteles', pasteleriaSchema);
