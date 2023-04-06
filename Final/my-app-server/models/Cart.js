const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    products: {
        type: Array,
        required: true,
    },
    personalData:{
        type: Object,
        required: true,
    }
})
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;