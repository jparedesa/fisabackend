const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/DeviceController');

module.exports = () => {
    router.get('/deviceActivated', deviceController.getActivated);
    router.post('/registerDevice', deviceController.registerDevice);
    return router;
}