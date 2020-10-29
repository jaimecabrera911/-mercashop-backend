const productCtrl = {};

const Product = require("../models/product.model");

productCtrl.createProduct = async (req, res) => {
  try {
    const {
      name,
      image,
      decription,
      quantity,
      price,
      category,
      discount,
    } = req.body;
    const newProduct = new Product({
      name,
      image,
      decription,
      quantity,
      price,
      category,
      discount,
    });
    await newProduct.save();
    res.status(200).json("Producto agregado exitosamente.");
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.getProducts = async (req, res) => {
  try {
    const category = req.query.category ? { category: req.query.category } : {};
    const products = await Product.find({ ...category });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('El producto ha sido borrado.');
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const { name, image, decription, quantity, price } = req.body;
    if (product) {
      product.name = name || product.name;
      product.image = image || product.image;
      product.decription = decription || product.decription;
      product.quantity = quantity || product.quantity;
      product.price = price || product.price;
      const updatedProduct = await product.save(product);
      if (updatedProduct) {
        res
          .status(200)
          .json({ message: "Product Updated", data: updatedProduct });
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

productCtrl.saveReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const review = {
        name: req.body.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      let sumReviews = 0;
      product.reviews.map((r) => {
        sumReviews += r.rating;
      });
      averageRating = sumReviews / product.reviews.length;
      product.rating = averageRating;
      const updatedProduct = await product.save();
      res.status(201).send({
        data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
        message: "Calificación guardada exitosamente.",
      });
    } else {
      res.status(404).send({ message: "No se encontró el producto" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = productCtrl;
