import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect to MongoDB
mongoose
  .connect(`${process.env.URI}`)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(() => {
    console.log("failed");
  });

//DB Schema
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model("product", ProductSchema);

//Start Express Server 
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

//Home Route
app.get("/", (req, res) => res.send("Hello World!"));

//Test Route
app.get("/test", (req, res) => res.send("Test Route"));

//Product List Route
app.get("/products", (req, res) => {
  Product.find({}).then(function (products) {
    res.send(products);
  });
});

//Hanldes post request for adding new product into DB
app.post("/new", async (req, res) => {
  console.log(req.body)
  const data = new Product({
    title: req.body.data.title,
    price: req.body.data.price,
    description: req.body.data.description,
    category: req.body.data.category,
    image: req.body.data.image,
    sku: req.body.data.sku,
  });
  const value = await data.save();
  res.json("product added");
});


//Handles post request for deleting product from DB
// app.post("/delete", async (req, res) => {
//   const { productId } = req.body;
//   Product.deleteOne({ _id: `ObjectId("${productId}")` });
//   res.json("Product Deleted");
// });
