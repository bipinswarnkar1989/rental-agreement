import { Component } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'agreement',
  template: `
      <div align="center" style="padding:10px;width:95%;margin:10px auto;" class="">
      <div  class="panel panel-primary">
              <div class="panel-heading text-center">
                <h3 class="panel-title">Edit Agreement</h3>

            </div>
     <div class="panel-body">
     <div class="row">
      <div class="col-md-6 tenant">
        <h3 class="text-center">Tenant Details</h3>

          <div class="form-group">
            <label for="tenant name">Tenant Name</label>
            <input type="text" class="form-control" id="tenant_name" #tenant_name [(ngModel)]="Agmt.tenant_name">
          </div>
          <div class="form-group">
            <label for="age">Tenant Fathers Name</label>
            <input type="text" class="form-control" id="tenant_fathers_name" #tenant_fathers_name [(ngModel)]="Agmt.tenant_fathers_name">
          </div>
          <div class="form-group">
            <label for="tenant name">Tenant Mobile</label>
            <input type="text" class="form-control" id="tenant_mobile" #tenant_mobile [(ngModel)]="Agmt.tenant_mobile">
          </div>
          <div class="form-group">
            <label for="tenant name">Tenant Address</label>
            <input type="text" class="form-control" id="tenant_address" #tenant_address [(ngModel)]="Agmt.tenant_address">
          </div>

      </div>

      <!-- Owner starts below-->
      <div class="col-md-6 tenant">
        <h3 class="text-center">Owner Details</h3>

          <div class="form-group">
            <label for="tenant name">Owner Name</label>
            <input type="text" class="form-control" id="owner_name" #owner_name [(ngModel)]="Agmt.owner_name">
          </div>
          <div class="form-group">
            <label for="age">Owner Fathers Name</label>
            <input type="text" class="form-control" id="owner_fathers_name" #owner_fathers_name [(ngModel)]="Agmt.owner_fathers_name">
          </div>

          <div class="form-group">
            <label for="tenant name">Owner Mobile</label>
            <input type="text" class="form-control" id="owner_mobile" #owner_mobile [(ngModel)]="Agmt.owner_mobile">
          </div>
          <div class="form-group">
            <label for="tenant name">Owner Address</label>
            <input type="text" class="form-control" id="owner_address" #owner_address [(ngModel)]="Agmt.owner_address">
          </div>

      </div>

      <div class="col-md-12 text-center">
        <h3 class="text-center">Renting Details</h3>
        <div class="form-group">
          <label for="tenant name">Monthly Rent</label>
          <input type="text" class="form-control" id="monthly_rent" #monthly_rent [(ngModel)]="Agmt.monthly_rent">
        </div>
        <div class="form-group">
          <label for="tenant name">Security Deposit</label>
          <input type="text" class="form-control" id="security_deposit" #security_deposit [(ngModel)]="Agmt.security_deposit">
        </div>
        <div class="form-group">
          <label for="tenant name">Renting Date</label>
          <input type="text" class="form-control" id="renting_date" #renting_date [(ngModel)]="Agmt.renting_date">
        </div>
        <div class="form-group">
          <label for="tenant name">Lease Period</label>
          <input type="text" class="form-control" id="lease_period" #lease_period [(ngModel)]="Agmt.lease_period">
        </div>

      </div>

      <div class="form-group text-center">
      <p style="font-size:18px;color:green;" align="center">{{message}}</p>
        <a style="margin-right:30px;" routerLink="/agreement/{{Agmt._id}}" routerLinkActive="active">  <button  type="button" class="btn btn-primary btn-lg">View</button></a>
     <button type="button" (click)="updateAgmt(Agmt)" class="btn btn-info btn-lg">Update</button>
      </div>
     </div>
     </div>
     </div>
       </div>`
})
export class AgmtEditComponent {

private id: string;
private Agmt: any[] = [];
private message: string;

// Link to our api, pointing to localhost
API = 'http://localhost:3000';

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private http: Http
  ) {}

ngOnInit() {
  this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      this.viewAgmt(this.id);
  });
  }

  //Get one agreement from the api
  viewAgmt(id){
       this.http.get(`${this.API}/agreement/${id}`)
         .map(res => res.json())
         .subscribe(agmt => {
               console.log('Agreement: '+ JSON.stringify(agmt));
               this.Agmt = agmt
         })

  }

  updateAgmt(Agmt){
      this.http.put(`${this.API}/agreement/${this.id}`,Agmt)
        .map(res => res.json())
        .subscribe(() => {
               this.message  = "Agreement Updated Successfully";
        })
  }

  print(){
      window.print();
  }

}
