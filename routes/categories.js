const express = require('express');
const router = express.Router()
const {authentication, isAdmin} = require('../middlewares/authentication')
const CategoryController = require('../controllers/CategoryController');


//isAdmin no está implementado para facilitar desarrollo
router.post('/create',authentication,CategoryController.createCategory)
router.get('/getAll', CategoryController.getAll)
router.put('/update/:_id', authentication,CategoryController.update)//falta isAdmin


module.exports = router;

