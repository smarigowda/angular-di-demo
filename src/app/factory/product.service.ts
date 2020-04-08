import { Product } from './shared/product';

export abstract class ProductService {
  abstract getProduct(): Product;
}
