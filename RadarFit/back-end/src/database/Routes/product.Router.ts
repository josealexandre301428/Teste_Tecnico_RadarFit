import { Router } from 'express';
import ProductController from '../controllers/productController';
import ProductModel from '../models/products';
import ProductService from '../services/productServices';

const route = Router();

const product = new ProductModel();
const productService = new ProductService(product);
const productController = new ProductController(productService);

route.get('/products', (req, res) => productController.read(req, res));
route.get('/products/:id', (req, res) => productController.readOne(req, res));
route.get('/products/?find', (req, res) => productController.readOneQuery(req, res));
route.post('/products', (req, res) => productController.create(req, res));
route.put('/products/:id', (req, res) => productController.update(req, res));
route.patch('/products/:id', (req, res) => productController.updatePatch(req, res));
route.delete('/products/:id', (req, res) => productController.delete(req, res));

export default route;