import { Request, Response, NextFunction } from 'express';
import servicesProducts from '../services/servicesProducts';
import HTTPSTATUS from '../util/HTTPSTATUS';
import validationProduct from '../util/joiValidation/schemaProduct';

const controllersProducts = {
  createProduct: async (
    req: Request,
    res: Response, 
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      await validationProduct(req.body);
      const product = await servicesProducts.createProduct(req.body);
      return res.status(HTTPSTATUS.CREATED).json(product);
    } catch (err) {
      return next(err);
    }
  },
  getProducts: async (req: Request, res: Response): Promise<Response> => {
    const products = await servicesProducts.getProducts();

    return res.status(HTTPSTATUS.OK).json(products);
  },
};

export default controllersProducts;
