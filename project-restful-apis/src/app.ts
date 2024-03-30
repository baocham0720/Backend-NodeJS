
import express, { Express, Request, Response,  NextFunction } from 'express';
import createError from 'http-errors';

const app: Express = express();
import { sendJsonErrors } from './helpers/responseHandler';
import cors from 'cors'

//import các routes
import routerCategories from './routes/v1/categories.route';
import routerBrands from './routes/v1/brands.route';
import routerProducts from './routes/v1/product.route';
import routerCustomers from './routes/v1/customers.route';
import routerStaffs from './routes/v1/staffs.route';
import routerOrders from './routes/v1/orders.route';
import routerDemo from './routes/v2/demo.route';
import routerAuth from './routes/v1/auth.route';
import {logs} from './middlewares/logs.middleware'
import {second} from './middlewares/second.middleware';
//bắt được kiểu json từ client gửi lên
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//để sử dụng middleware
app.use(cors({ origin: '*'})) //cho phép gọi bất kì đâu
//app.use(logs)
//app.use(second)



//định nghĩa các routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Express + TypeScript Server'});
});

//cấu hình routes cho app
app.use('/api/v1/categories', routerCategories )
app.use('/api/v1/brands', routerBrands)
app.use('/api/v1/products', routerProducts)
app.use('/api/v1/customers', routerCustomers)
app.use('/api/v1/staffs', routerStaffs)
app.use('/api/v1/orders', routerOrders)
app.use('/api/v2/demo', routerDemo)
app.use('/api/v1/auth', routerAuth)

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  // res.status(statusCode).json({ 
  //   statusCode: statusCode, 
  //   message: err.message 
  // });
  sendJsonErrors(req,res,err)
});

export default app;