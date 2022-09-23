import { sign, verify, SignOptions } from 'jsonwebtoken'; 
import dotenv from 'dotenv';
import ILogin from '../interfaces/ILogin';
import IUser from '../interfaces/IUser';

dotenv.config();

const MY_SECRET = 'minhasenhasecreta';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const myJwt = {
  coder: (payload: ILogin | IUser) => {
    const token = sign({ payload }, MY_SECRET, JWT_CONFIG);
    return token;
  },
  decoder: (token: string) => {
    const data = verify(token, MY_SECRET);
    return data;
  },
};

export default myJwt;