const mongoose = require('mongoose');

const FoodsSchema = mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: false,
    },
    score: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const Food = mongoose.model("Foods", FoodsSchema);
module.exports = Food;