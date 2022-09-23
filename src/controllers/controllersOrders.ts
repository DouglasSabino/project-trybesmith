import { Request, Response } from 'express';
import servicersOrders from '../services/servicesOrders';
import HTTPSTATUS from '../util/HTTPSTATUS';

const controllerOrders = {
  getOrders: async (req: Request, res: Response) => {
    const orders = await servicersOrders.getOrders();
    
    return res.status(HTTPSTATUS.OK).json(orders);
  },
};

export default controllerOrders;
