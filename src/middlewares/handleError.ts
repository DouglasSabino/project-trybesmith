import { ErrorRequestHandler } from 'express';
import Joi from 'joi';
import HTTPSTATUS from '../util/HTTPSTATUS';

// TIPAGEM DO MIDDLEWARE DE ERRO
// https://stackoverflow.com/questions/50218878/typescript-express-error-function
const handleError: ErrorRequestHandler = (err, _req, res, _next) => {
  const JoiError = Joi.isError(err);
  const errCode = err.message.includes('required') 
    ? HTTPSTATUS.IS_REQUIRED : HTTPSTATUS.INVALID_VALUE;
  if (JoiError) return res.status(errCode).json({ message: err.message });
  return res.status(HTTPSTATUS.INTERNAL_ERROR).json({ message: 'internal Error' });
};

export default handleError;
