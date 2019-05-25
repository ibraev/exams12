const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    user:{
        type: Schema.Types,
        ref: 'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    image: String
});

const Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;
