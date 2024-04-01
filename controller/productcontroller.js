const models = require('../models')



const getAllProducts = (req,res)=>{

  
    const page = parseInt(req.query.page) || 1;
    const limit = 3
    const offset = (page - 1) * limit;

    models.Product.findAndCountAll({
      limit: limit,
      offset: offset
    }).then((result)=>{
       res.status(200).json({
        show:result.rows
       })
    }).catch(error=>{
        console.error(error)
    })
     
 }

 const getProductByID = (req,res)=>{
 
    const id = req.params.id
    models.Product.findByPk(id).then((result)=>{
        res.status(200).json({
            message: `data with id ${id} is fetch successfully`,
            post: result
        })       
    }).catch(error=>{
        res.status().json({
            message:"something went wrong",
            error:error
        })
    })
}


const createProduct = (req,res)=>{
    const requestBody = {
        productid: req.body.productid,
        productname: req.body.productname,
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid
    }
    models.Product.create(requestBody)
    .then((result)=>{
        res.status(200).json({
            message:"Product created successfully",
            Product:result
        })
    }).catch((error) => {
        res.status(400).json({
            message:"something went wrong",
            error:error
        })
    })
}

const updateProduct =(req,res)=>{

    const id = req.params.id

    updatedBody={

        productid: req.body.productid,
        productname: req.body.productname,
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid

    }

    models.Product.update(updatedBody, {where: {id:id}})
    .then((result)=>{
        res.status(200).json({
            message:"Product updated successfully",
            updatedproduct:updatedBody

        })
    }).catch((error)=>{
        res.status(400).json({message:"something went wrong",
        error:error
    })
})
        
}

const deleteById = (req,res) => {
    const id = req.params.id;
    models.Product.destroy({where: {id:id}})
    .then((result)=>{
        res.status(200).json({
            message:"product deleted successfully"
        })
    }).catch((error)=>{
        message:"something went wrong"
        error:error
    })
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductByID,
    updateProduct,
    deleteById
}