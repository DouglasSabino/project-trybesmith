import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';
import db from './connection';

const modelsUsers = {
  addUser: async (payload: IUser): Promise<void> => {
    const SQL_ADD_USER = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;

    await db.query<ResultSetHeader>(SQL_ADD_USER, [
      payload.username, 
      payload.classe, 
      payload.level, 
      payload.password,
    ]);
  },
};

export default modelsUsers;
