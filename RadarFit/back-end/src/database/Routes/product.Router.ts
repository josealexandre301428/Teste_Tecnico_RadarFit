import { Router } from 'express';
import ProductController from '../controllers/productController';
import ProductModel from '../models/products';
import ProductService from '../services/productServices';

const route = Router();

const product = new ProductModel();
const productService = new ProductService(product);
const productController = new ProductController(productService);

route.get('/produtos', (req, res) => productController.read(req, res));
route.get('/produtos/find?', (req, res) => productController.readOneQuery(req, res));
route.get('/produtos/:id', (req, res) => productController.readOne(req, res));
route.post('/produtos', (req, res) => productController.create(req, res));
route.put('/produtos/:id', (req, res) => productController.update(req, res));
route.patch('/produtos/:id', (req, res) => productController.updatePatch(req, res));
route.delete('/produtos/:id', (req, res) => productController.delete(req, res));

export default route;