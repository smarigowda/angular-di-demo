import { Product } from './shared/product';

export class ProductService {
  constructor() {}
  getProduct(): Product {
    return new Product('iPhone 11');
  }
}
