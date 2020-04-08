import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'di-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {
  }

}
