import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHttpModule } from '@/infra/http/angular-http-client/angular-http.module';

@NgModule({
  imports: [
    CommonModule,
    AngularHttpModule
  ],
  declarations: []
})
export class MainModule { }
