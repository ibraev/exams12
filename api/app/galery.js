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

module.exports = router;
