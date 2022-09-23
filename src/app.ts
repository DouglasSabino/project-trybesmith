import express from 'express';
import routerProducts from './routers/routerProducts';
import routerOrders from './routers/routerOrders';
import routerUser from './routers/routerUser';
import handleError from './middlewares/handleError';
import routerLogin from './routers/routerLogin';

const app = express();
app.use(express.json());

app.use('/products', routerProducts);
app.use('/orders', routerOrders);
app.use('/users', routerUser);
app.use('/login', routerLogin);

app.use(handleError);
export default app;
