import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { ProductService } from './product.service';
// import { RealProductService } from './real.product.service';
import { environment } from '../../environments/environment';
// import { environment } from '../../environments/environment.prod';
import { productServiceFactory } from './product.service.factory';

@NgModule({
  declarations: [AppComponent, Product1Component, Product2Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: 'IS_PROD_ENV', useValue: environment.production },
    {
      provide: ProductService,
      useFactory: productServiceFactory, // can be either 'RealProductService' or 'MockProductService' depends on the env variable
      deps: ['IS_PROD_ENV'],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
