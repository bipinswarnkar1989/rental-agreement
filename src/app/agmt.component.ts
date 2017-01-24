import { Component } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'agreement',
  template: `
             <div align="center" style="padding:10px;border:1px solid;width:95%;margin:10px auto;" class="">
  <h2 style="text-decoration: underline;" align="center">RENTAL AGREEMENT</h2>
  <p>The Rental Agreement made and executed on {{ Agmt.created }} by and between:</p>
  <div align="center"><h3>Mr. {{ Agmt.owner_name}} </h3>
 S/o. {{Agmt.owner_fathers_name}}
  ,{{Agmt.owner_address}}.<br>
  Mob: {{Agmt.owner_mobile}}
</div>
Hereinafter called the <b>LESSOR</b> of the ONE PART:
<div align="center">
<h3>Mr. {{ Agmt.tenant_name}} </h3>
S/o. {{Agmt.tenant_fathers_name}}
 ,{{Agmt.tenant_address}}.<br>
 Mob: {{Agmt.tenant_mobile}}
</div>
Hereinafter called the <b>LESSEE (TENANT)</b> of the OTHER PART:
<h4>Witnesseth as follows:-</h4>
<div>
WHEREAS the Lessor is the absolute owner situated at {{Agmt.owner_address}} , fully described in the schedule hereunder the Lesse approached the Lessor for shop Schedule premises on rental basis for the legal business purpose under the following terms and conditions:
<ol align="left">
<li>The Lessor agreed to let out the above premises to the Lesse on a monthly rent of Rs.{{Agmt.monthly_rent}}/- per month, the Lesse has agreed to pay the same to the Lessor regularly.The Lesse occupied the said premises on {{Agmt.renting_date}} .</li>
<li>The Lesse hereby agrees to pay the above rent on or before the 5th day of every English calendar month.</li>
<li>The Lesse should use the said premises for residential purpose only.</li>
<li>The Lease will be for a {{Agmt.lease_period}} from the date of this rental agreement, but it can be extended by mutual consent.</li>
<li>The Lesse has paid a sum of {{Agmt.security_deposit}} as Security Deposit. The same amount will be refundable at the time of termination of the lease and this amount shall not carry any interest.</li>

</ol>
<h3 style="text-decoration: underline;" align="center">SCHEDULE</h3>
<div>
<p>IN WITNESS WHEREOF the LESSOR and LESSEE have signed the Agreement at {{Agmt.owner_address}} the day, month and year first above written.</p>
<br><br>
<div align="center" style="padding:10px;width:95%;height:200px;margin:10px auto;" class="">
<div style="float:left;"><h3 align="center">{{Agmt.owner_name}}</h3><br><b align="center">LESSOR/OWNER</b></div>
<div style="float:right;"><h3 align="center">{{Agmt.tenant_name}}</h3><br><b align="center">LESSE/TENANT</b></div>
</div>
</div>
</div>

<a style="margin-right:30px;" routerLink="/edit/agreement/{{Agmt._id}}" routerLinkActive="active">  <button  type="button" class="btn btn-primary ">Edit</button></a>
<button (click)="print()" class="btn btn-info">Print</button>
             </div>`
})
export class AgmtComponent {

private id: string;
private Agmt: any[] = [];

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

  print(){
      window.print();
  }

}
