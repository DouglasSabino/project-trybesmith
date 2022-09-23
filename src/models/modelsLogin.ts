import { RowDataPacket } from 'mysql2/promise';
import db from './connection';
import ILogin from '../interfaces/ILogin';

interface DataPacket extends ILogin, RowDataPacket{}

const modelsLogin = {
  verifyUserName: async (body: ILogin) => {
    const SQL_GET_USER = 'SELECT * FROM Trybesmith.Users WHERE username=?';
    const [user] = await db.query<DataPacket[]>(SQL_GET_USER, [body.username]);
    return user;
  },
  verifyPassword: async (body: ILogin) => {
    const SQL_VERIFY_PASSWORD = 'SELECT * FROM Trybesmith.Users WHERE password=?';
    const [password] = await db.query<DataPacket[]>(SQL_VERIFY_PASSWORD, [body.password]);
    return password;
  },
};

export default modelsLogin;
