import { Product } from './shared/product';
import { ProductService } from './product.service';

export class RealProductService implements ProductService {
  constructor() {}
  getProduct(): Product {
    return new Product('Real iPhone 11:');
  }
}
