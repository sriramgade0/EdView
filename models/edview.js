const mongoose = require('mongoose');

const edviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean,
    }
});

module.exports = mongoose.model('EdView', edviewSchema);
