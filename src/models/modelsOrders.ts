import { RowDataPacket } from 'mysql2/promise';
import IOrders from '../interfaces/IOrders';
import db from './connection';

interface DataPacket extends IOrders, RowDataPacket{}

const modelsOrders = {
  // Link sobre a funcionamento da função JSON_ARRAYAGG
  // https://universodosdados.com/tag/json_arrayagg/#:~:text=Transforma%20os%20Valores%20de%20Linhas%20Diferentes%20em%20uma%20String%20separada%20por%20Algum%20Delimitador
  getOrders: async (): Promise<DataPacket[]> => {
    const SQL_GET_ORDERS = `SELECT orders.id, orders.userId, 
    JSON_ARRAYAGG(product.id) AS productsIds
    FROM Trybesmith.Orders AS orders
    JOIN Trybesmith.Products AS product
    ON orders.id = product.orderId
    GROUP BY orders.id
    ORDER BY orders.userId`;
    const [orders] = await db.query<DataPacket[]>(SQL_GET_ORDERS);
    return orders;
  },
};

export default modelsOrders;
