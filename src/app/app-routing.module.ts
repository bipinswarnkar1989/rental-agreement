import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MyAppComponent } from './myapp.component';

const appRoutes: Routes = [
  { path: '', component: MyAppComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

 ]
})


export class AppRoutingModule {}
