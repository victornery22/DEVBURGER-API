import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import multer from 'multer';
import authMiddleware from './app/middlewares/auth';
import OrderController from './app/controllers/OrderController';
import CreatePaymentIntentController from './app/controllers/stripe/CreatePaymentIntentController';


const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store) //Cadastro
routes.post('/session', SessionController.store) //Login

//Autenticação
routes.use(authMiddleware);
routes.post('/products',upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id',upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id',upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders/:id', OrderController.update)

//CRIAÇÃO DE PAGAMENTO
routes.post("/create-payment-intent", CreatePaymentIntentController.store)

export default routes;