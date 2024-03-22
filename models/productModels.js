import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        si: {type: String, required: true},
        name: {type: String, required: true},
        amount: {type: Number, required: true},
        adress: {type: String, required: true},
        year: {type: Number, required: true},
        img: {type: String, required: true},
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('shoes', productSchema);

export default Product;