import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }  from './app-routing.module';
import { AgmtRoutingModule } from './agmt-routing.module';
import { AgmtEditRoutingModule } from './agmtedit-routing.module';

import { MyAppComponent } from './myapp.component';
import { AppComponent } from './app.component';
import { AgmtComponent } from './agmt.component';
import { AgmtEditComponent } from './agmtedit.component';

@NgModule({
  declarations: [
    AppComponent,
    AgmtComponent,
    MyAppComponent,
    AgmtEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmtRoutingModule,
    AppRoutingModule,
    AgmtEditRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
