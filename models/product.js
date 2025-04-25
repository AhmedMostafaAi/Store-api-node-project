const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this product'],
        trim: true,
        maxlength: [120, 'Name can not be more than 120 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price for this product'],
        maxlength: [5, 'Price can not be more than 5 characters']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        },
        // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    }
})

module.exports = mongoose.model('Product', ProductSchema)
