import { RowDataPacket } from 'mysql2/promise';
import IOrders from '../interfaces/IOrders';
import modelsOrders from '../models/modelsOrders';

interface DataPacket extends IOrders, RowDataPacket{}

const servicersOrders = {
  getOrders: async (): Promise<DataPacket[]> => {
    const orders = await modelsOrders.getOrders();
    return orders;
  },
};

export default servicersOrders;
