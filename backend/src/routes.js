const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const PostController = require('./controllers/PostController');

routes.post('/posts', multer(multerConfig).single('file'), PostController.store);

module.exports = routes;