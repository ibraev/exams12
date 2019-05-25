const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const config = require('../config');
const Gallery = require('../models/Galery');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const gallery = await Gallery.find();
    res.send(gallery)
});

router.post('/', (req, res) => {
    const galleryData = req.body;
    if (req.file) {
        galleryData.image = req.file.filename;
    }
    const gallery = new Gallery(galleryData);
    gallery.save()
        .then(result => res.send(result))
        .catch(error => res.status(400).send(error))
});

module.exports = router;
