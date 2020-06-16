import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentersModule } from './presenters/presenters.module';
import { EmployeeScreenComponent } from './presenters/pages/employee-screen/employee-screen.component';
import { RequestScreenComponent } from './presenters/pages/request-detail-screen/request-screen.component';

/* dependencia do single-spa - (deve ser utilizado se não houver nenhuma outra rota) */
//import { EmptyRouteComponent } from './empty-route/empty-route.component';
/* dependencia do single-spa */
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: 'employee-screen', component: EmployeeScreenComponent },
  { path: 'request-screen/:requestNumber', component: RequestScreenComponent },
  { path: 'request-screen', component: RequestScreenComponent },
  { path: '',   redirectTo: '/employee-screen', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: EmployeeScreenComponent },

  /* dependencia do single-spa - (deve ser utilizado se não houver nenhuma outra rota) */
  //{ path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PresentersModule],
  exports: [RouterModule],
  providers: [
    /* dependencia do single-spa */
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
