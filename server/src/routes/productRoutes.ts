import { Router } from 'express';
import productsController from '../controllers/productsController';

class ProductRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', productsController.list);
    this.router.get('/:id', productsController.getOne);
    this.router.post('/', productsController.create);
    this.router.delete('/:id', productsController.delete);
    this.router.put('/:id', productsController.update);
  }

}

const productRoutes = new ProductRoutes();
export default productRoutes.router;
