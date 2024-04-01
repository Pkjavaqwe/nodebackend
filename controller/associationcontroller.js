const models = require('../models')

async function associate(req,res) {
    const catid=req.query.categoryid
    const category =await models.Category.findAll({
        where:{categoryid:catid},
        include:{model:models.Product}
    })
    res.status(200).json({
        data:category
    })
}

module.exports = {
    associate
}