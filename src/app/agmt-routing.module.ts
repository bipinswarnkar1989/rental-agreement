import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmtComponent } from './agmt.component';

const agmtRoutes: Routes = [
  { path: 'agreement/:id', component: AgmtComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(agmtRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})

export class AgmtRoutingModule {}
