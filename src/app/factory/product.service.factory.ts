import { MockProductService } from './mock.product.service';
import { RealProductService } from './real.product.service';

export function productServiceFactory(isProd: boolean) {
  if (isProd) {
    return new RealProductService();
  } else {
    return new MockProductService();
  }
}
