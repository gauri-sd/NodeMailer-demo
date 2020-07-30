const mongoose = require('mongoose');

// const url='mongodb://localhost:27017/Task3'
// mongoose.connect(url);

const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    email: {type: String, reuired: true},
    name: {type: String, required: true},
    addr: {type: String, required: true},
});

// Export the model
module.exports = mongoose.model('EmailDeom', EmailSchema,'EmailDemo');