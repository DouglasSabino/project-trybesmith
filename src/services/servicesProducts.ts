import IProduct from '../interfaces/IProduct';
import modelsProducts from '../models/modelsProducts';

const servicesProducts = {
  createProduct: async (body: IProduct): Promise<IProduct> => {
    const product = await modelsProducts.createProduct(body);

    return product;
  },
  getProducts: async (): Promise<IProduct[]> => {
    const products = await modelsProducts.getProducts();
    return products;
  },
};

export default servicesProducts;
