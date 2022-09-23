import express from 'express';
import controllerOrders from '../controllers/controllersOrders';

const routerOrders = express.Router();

routerOrders.get('/', controllerOrders.getOrders);

export default routerOrders;
