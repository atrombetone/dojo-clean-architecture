import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './presenters/pages/home/home.component';
import { ProductsComponent } from './presenters/pages/products/products.component';
import { EmployeesComponent } from './presenters/pages/employees/employees.component';


const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
