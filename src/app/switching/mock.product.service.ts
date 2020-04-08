import { Product } from './shared/product';

export class MockProductService {
  constructor() {}
  getProduct(): Product {
    return new Product('iPhone 11: Mock');
  }
}
