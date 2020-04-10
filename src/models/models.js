const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    _id: String,
    name: String,
    image: String,
    year: Number,
    origin: String,
    meanPrice: Number,
    href: String,
    version: String,


},{

    collection: 'matchFiles'
});

module.exports = mongoose.model('matchFile', fileSchema)