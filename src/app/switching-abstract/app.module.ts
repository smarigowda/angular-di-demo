import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { ProductService } from './product.service';
import { RealProductService } from './real.product.service';

@NgModule({
  declarations: [AppComponent, Product1Component, Product2Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: ProductService, useClass: RealProductService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
