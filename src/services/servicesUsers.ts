import modelsUsers from '../models/modelsUsers';
import IUser from '../interfaces/IUser';

const servicesUsers = {
  addUser: async (payload: IUser) => {
    await modelsUsers.addUser(payload);
  }, 
};

export default servicesUsers;
