import Joi from 'joi';
import IUser from '../../interfaces/IUser';

const validationUser = async (body: IUser) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });
  await schema.validateAsync(body);
};

export default validationUser;