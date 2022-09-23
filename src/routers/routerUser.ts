import express from 'express';
import controllersUsers from '../controllers/controllersUsers';

const routerUser = express.Router();

// ROTAS DE USERS
routerUser.post('/', controllersUsers.addUser);

export default routerUser;