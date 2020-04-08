import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data;
  constructor(private http: HttpClient) {
    this.data = http.get('assets/product.json').subscribe(data => {
      console.log(data);
      this.data = data;
    });
    console.log(this.data);
  }

  getProduct(): Product {
    // If you want to use the data returned by the http request
    // then return an Observable
    // so that the client can subscribe to the observable to get the data
    return new Product(0, 'iPhone 7', 249.99, 'The latest iPhone, 7 inch screen');
  }
}
