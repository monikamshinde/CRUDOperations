import { Component, OnInit } from '@angular/core';
import { CustomerServService } from '../shared/customer-serv.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private sr: CustomerServService ) { }

  submitted:boolean;
  showSuccessMessage:boolean;
  formControls=this.sr.Myform.controls;
  ngOnInit() {
  }

  onSubmit(){
    this.submitted=true;
    if(this.sr.Myform.valid){
     if(this.sr.Myform.get('$key').value == null)
      this.sr.insertCustomer(this.sr.Myform.value);//this.sr.Myform.value contains the current values of the form which are to be inserted including $key. 
     else
      this.sr.updateCustomer(this.sr.Myform.value);
      this.showSuccessMessage=true;
      setTimeout(()=>this.showSuccessMessage=false , 10000);//i want to show success message for some time so we have added it.
    this.submitted=false;
    this.sr.Myform.reset();
    }
  }

}
