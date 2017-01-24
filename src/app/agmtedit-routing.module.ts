import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmtEditComponent } from './agmtedit.component';

const agmtEditRoutes: Routes = [
  { path: 'edit/agreement/:id', component: AgmtEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(agmtEditRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class AgmtEditRoutingModule {}
