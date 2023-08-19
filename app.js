const express=require("express");
const cors=require("cors");
const swaggerUI = require("swagger-ui-express")
const swaggerDocumentation = require("./src/docs/swagger.js")
const authenticationRouter=require("./src/Authentication/authenticationRoutes.js")
const usersRouter=require('./src/Users/userRoutes.js')
const productsRouter=require('./src/Products/productRoutes.js')
const orderRouter=require('./src/Orders/ordersRoutes.js')
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to vehicle spare parts project",
  })
})

app.use(
  "/documentation",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocumentation)
)

app.use("/api/v1/users",authenticationRouter,usersRouter);
app.use("/api/v1/products",productsRouter);
app.use("/api/v1/orders",orderRouter);


module.exports = app
