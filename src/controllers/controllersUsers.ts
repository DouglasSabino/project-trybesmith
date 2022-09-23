import { Request, Response, NextFunction } from 'express';
import servicesUsers from '../services/servicesUsers';
import IUser from '../interfaces/IUser';
import myJwt from '../util/makeToken';
import HTTPSTATUS from '../util/HTTPSTATUS';
import validationUser from '../util/joiValidation/schemaUser';

const controllersUsers = {
  addUser: async (req: Request<unknown, unknown, IUser>, res: Response, next: NextFunction) => {
    try {
      await validationUser(req.body);
      const { username, classe, level, password } = req.body;
  
      await servicesUsers.addUser({ username, classe, level, password });
      const token = myJwt.coder({ username, classe, level, password });
  
      return res.status(HTTPSTATUS.CREATED).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};

export default controllersUsers;
