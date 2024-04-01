const models = require('../models')



const getAllCategories = (req,res)=>{

    /* let page=parseInt(req.query.page)   
     let limit =3;
      models.Product.findAndCountAll({
         limit:3,
         offset:limit*(page-1)*/
     
        //  let page=parseInt(req.query.page)   
        //  let limit =3;
             models.Category.findAll().then((result=>{
 
         res.status(200).json({
             message:"all data is fetched",
             show:result
         })
      })).catch(error=>{
         res.status(401).json({
             message: "Something went wrong!",
             error: error
         })
      })
     
 }

 const getCategoryByID = (req,res)=>{
 
    const id = req.params.id
    models.Category.findByPk(id).then((result)=>{
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


const createCategory = (req,res)=>{
    const requestBody = {
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid
    }
    models.Category.create(requestBody)
    .then((result)=>{
        res.status(200).json({
            message:"Category created successfully",
            Category:result
        })
    }).catch((error) => {
        res.status(400).json({
            message:"something went wrong",
            error:error
        })
    })
}

const updateCategory =(req,res)=>{

    const id = req.params.id

    updatedBody={

        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid

    }

    models.Category.update(updatedBody, {where: {id:id}})
    .then((result)=>{
        res.status(200).json({
            message:"Category updated successfully",
            updatedproduct:updatedBody

        })
    }).catch((error)=>{
        res.status(400).json({
            message:"something went wrong",
            error:error
    })
})
        
}

const deleteCategoryById = (req,res) => {
    const id = req.params.id;
    models.Category.destroy({where: {id:id}})
    .then((result)=>{
        res.status(200).json({
            message:"Category deleted successfully"
        })
    }).catch((error)=>{
        res.status(200).json({
        message:"something went wrong",
        error:error
    })
})
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByID,
    updateCategory,
    deleteCategoryById
}