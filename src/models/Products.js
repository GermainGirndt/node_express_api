const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    // all entries are becoming a type
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Registers the model and links it to the schema
mongoose.model('Product', ProductSchema);