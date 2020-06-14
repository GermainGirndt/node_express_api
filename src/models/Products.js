const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

// Add automatically pagination to the db responses
ProductSchema.plugin(mongoosePaginate);

// Registers the model and links it to the schema
mongoose.model('Product', ProductSchema);