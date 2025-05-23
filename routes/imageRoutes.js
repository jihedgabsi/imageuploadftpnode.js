const express = require('express');
const router = express.Router();

const UploadImage = require("../services/upload");

const multer = require("multer");

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});




// Handle single image upload
router.post('/upload',  Multer.fields([
    { name: "image", maxCount: 1 },UploadImage,
  ]),);

module.exports = router;