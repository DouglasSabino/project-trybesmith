import modelsLogin from '../models/modelsLogin';
import ILogin from '../interfaces/ILogin';

const servicesLogin = {
  verifyUserName: async (body: ILogin) => {
    const user = await modelsLogin.verifyUserName(body);
    return user;
  },
  verifyPassword: async (body: ILogin) => {
    const password = await modelsLogin.verifyPassword(body);
    return password;
  },
};

export default servicesLogin;
