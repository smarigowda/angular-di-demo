import { Component, OnInit } from '@angular/core';
import { MockProductService } from '../mock.product.service';
import { ProductService } from '../product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'di-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss'],
  providers: [{ provide: ProductService, useClass: MockProductService }],
})
export class Product2Component implements OnInit {
  product: Product;
  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {}
}
