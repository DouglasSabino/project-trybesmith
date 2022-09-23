import Joi from 'joi';
import IProduct from '../../interfaces/IProduct';

const validationProduct = async (body: IProduct) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });
  await schema.validateAsync(body);
};

export default validationProduct;