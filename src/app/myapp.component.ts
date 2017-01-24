import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MyAppComponent {
  title = 'app works!';
  public create = false;




  // Link to our api, pointing to localhost
 API = 'http://localhost:3000';

 // Declare empty list of agreements
  agmts: any[] = [];
  private message: string;
  constructor(private http: Http) {}

 // Angular 2 Life Cycle event when component has been initialized
 ngOnInit() {
   this.getAllAgmts();

 }

 // Get all agreements from the API
 getAllAgmts() {
   this.http.get(`${this.API}/agreement`)
     .map(res => res.json())
     .subscribe(agmts => {
       console.log(agmts)
       this.agmts = agmts
     })
 }

 //Delete one agreement from the api
 deleteAgmt(id){
      if(confirm("Are you sure want to delete?")){
      this.http.delete(`${this.API}/agreement/${id}`)
        .map(res => res.json())
        .subscribe(() => {
          this.getAllAgmts();
        })
      }
 }



 // Add one agreement to the API
 addAgmt(tenant_name,tenant_fathers_name,owner_name, owner_fathers_name,tenant_mobile,tenant_address,owner_mobile,owner_address,monthly_rent,security_deposit,renting_date,lease_period) {
   this.http.post(`${this.API}/agreement`, {tenant_name,tenant_fathers_name,owner_name, owner_fathers_name,tenant_mobile,tenant_address,owner_mobile,owner_address,monthly_rent,security_deposit,renting_date,lease_period})
     .map(res => res.json())
     .subscribe(() => {
       this.getAllAgmts();
       this.message = "Agreement Added Successfully";

     })
 }


}
