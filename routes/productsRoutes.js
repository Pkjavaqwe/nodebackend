const express = require('express');
const productcontroller = require("../controller/productcontroller")

const router = express.Router();

router.post('/',productcontroller.createProduct)
router.get('/',productcontroller.getAllProducts)
router.get('/:id',productcontroller.getProductByID)
router.put('/:id',productcontroller.updateProduct)
router.delete('/:id',productcontroller.deleteById)

module.exports = router;