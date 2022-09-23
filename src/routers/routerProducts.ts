import express from 'express';
import controllersProducts from '../controllers/controllersProducts';

const routerProducts = express.Router();

// ROTAS DE PRODUTOS
routerProducts.post('/', controllersProducts.createProduct);
routerProducts.get('/', controllersProducts.getProducts);

export default routerProducts;