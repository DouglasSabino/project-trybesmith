import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import db from './connection';
import IProduct from '../interfaces/IProduct';

interface DataPacket extends IProduct, RowDataPacket{}

const modelsProducts = {
  createProduct: async ({ name, amount }: IProduct): Promise<IProduct> => {
    const SQL_POST_PRODUCT = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';
    const [{ insertId }] = await db.query<ResultSetHeader>(SQL_POST_PRODUCT, [name, amount]);

    return { id: insertId, name, amount };
  },
  getProducts: async (): Promise<DataPacket[]> => {
    const SQL_GET_PRODUCTS = 'SELECT * FROM Trybesmith.Products';
    const [products] = await db.query<DataPacket[]>(SQL_GET_PRODUCTS);
    return products;
  },
};

export default modelsProducts;
