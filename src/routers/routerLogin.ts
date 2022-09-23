import express from 'express';
import controllerLogin from '../controllers/controllersLogin';

const routerLogin = express.Router();

routerLogin.post('/', controllerLogin.login);

export default routerLogin;
