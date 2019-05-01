import { Router } from 'express';

class ProductRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', (req, res) => res.send('Products'));
  }

}

const productRoutes = new ProductRoutes();
export default productRoutes.router;