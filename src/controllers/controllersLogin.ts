import { Request, Response, NextFunction } from 'express';
import HTTPSTATUS from '../util/HTTPSTATUS';
import validationLogin from '../util/joiValidation/schemaLogin';
import myJwt from '../util/makeToken';
import servicesLogin from '../services/servicesLogin';

const controllerLogin = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await validationLogin(req.body);
      const user = await servicesLogin.verifyUserName(req.body);
      if (user.length === 0) {
        return res.status(
          HTTPSTATUS.INVALID_CREDENCIAL,
        ).json({ message: 'Username or password invalid' });
      }
      const password = await servicesLogin.verifyPassword(req.body);
      if (password.length === 0) {
        return res.status(HTTPSTATUS.INVALID_CREDENCIAL)
          .json({ message: 'Username or password invalid' });
      }
      const token = myJwt.coder(req.body);
      return res.status(HTTPSTATUS.OK).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};

export default controllerLogin;
