import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'di-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Product1Component implements OnInit {
  product: Product;
  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {}
}
