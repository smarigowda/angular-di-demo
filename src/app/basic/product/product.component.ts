import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'di-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
