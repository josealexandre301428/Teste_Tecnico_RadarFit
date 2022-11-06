import  express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './database/middlewares/error';
import productRouter from './database/Routes/product.Router';


const app = express();
app.use(express.json());
app.use(cors());
app.use(productRouter);
app.use(errorHandler);

export default app;

