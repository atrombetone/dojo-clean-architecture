import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetEmployeesUseCaseFactory } from './main/factories/employee-factory';
import { RequestFactory } from './main/factories/request-detail-factory';

// import { HomeComponent } from './presenters/pages/home/home.component';

// import { ProductsScreenComponent } from './presenters/pages/products-screen/products-screen.component';
// import { GetProductServiceProvider } from '@/providers/network/product';

@NgModule({
  declarations: [
    AppComponent,
    //ProductsScreenComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetEmployeesUseCaseFactory, RequestFactory ],
  bootstrap: [AppComponent]
})
export class AppModule { }