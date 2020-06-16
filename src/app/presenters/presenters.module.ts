import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeScreenComponent } from './pages/employee-screen/employee-screen.component';
import { MainModule } from '@/main/main.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BenefitListComponent } from './components/benefit-list/benefit-list.component';
import { RequestScreenComponent } from './pages/request-detail-screen/request-screen.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    RouterModule,
  ],
  declarations: [EmployeeScreenComponent, EmployeeListComponent, BenefitListComponent, RequestScreenComponent]
})
export class PresentersModule { }
