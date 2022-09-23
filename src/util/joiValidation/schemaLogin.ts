import Joi from 'joi';
import ILogin from '../../interfaces/ILogin';

const validationLogin = async (body: ILogin) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
  });
  await schema.validateAsync(body);
};

export default validationLogin;