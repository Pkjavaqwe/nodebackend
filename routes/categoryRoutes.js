const express = require('express')

const router = express.Router()

const categoryController = require('../controller/categorycontroller')

router.post('/',categoryController.createCategory)
router.get('/',categoryController.getAllCategories)
router.get('/:id',categoryController.getCategoryByID)
router.delete('/:id',categoryController.deleteCategoryById)
router.put('/:id',categoryController.updateCategory)

module.exports = router 