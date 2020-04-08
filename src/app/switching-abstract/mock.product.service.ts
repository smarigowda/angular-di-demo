import { Product } from './shared/product';
import { ProductService } from './product.service';

export class MockProductService implements ProductService {
  constructor() {}
  getProduct(): Product {
    return new Product('iPhone 11: Mock');
  }
}
