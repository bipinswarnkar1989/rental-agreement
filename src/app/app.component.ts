import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Bootstrap Navbar -->
  <nav class="navbar navbar-default bg-faded">
    <div class="container">
      <a class="navbar-brand center" href="#">Rental Agreement</a>
      <a href="/" class="btn btn-primary navbar-btn pull-right"> Home</a>

    </div>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}
