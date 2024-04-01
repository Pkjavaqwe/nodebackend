const productRoutes = require('./routes/productsRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const associationRoutes = require('./routes/associationroute')

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
  }

const bodyParser = require('body-parser')

const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use("/api/product",productRoutes)
app.use("/api/category",categoryRoutes)
app.use("/api/association",associationRoutes)
app.listen(7000,()=>{
    console.log('server is up and running on port no 7000')
})