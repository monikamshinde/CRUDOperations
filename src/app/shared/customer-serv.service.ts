import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class CustomerServService {

  constructor(private firedb:AngularFireDatabase) { }
  customerList:AngularFireList<any>;
  
  Myform=new FormGroup({
    $key : new FormControl(null),
    fullName:new FormControl('', Validators.required),
    email : new FormControl('', Validators.email),
    mobile : new FormControl('',[ Validators.required, Validators.minLength(10)]),
    location : new FormControl('')
  });

  getCustomers(){         //to initialize the customerList
    this.customerList=this.firedb.list('customer');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer){//during this firebase automatically creates the primary unique key.
    this.customerList.push({
      fullName:customer.fullName,
      email:customer.email,
      mobile:customer.mobile,
      location:customer.location
    });
  }

  populateForm(customer){
    this.Myform.setValue(customer);
  }

  updateCustomer(customer){
    this.customerList.update(customer.$key,
      {
        fullName:customer.fullName,
        email:customer.email,
        mobile:customer.mobile,
        location:customer.location
      });
  }

  deleteCustomer($key:string){
    this.customerList.remove($key);
  }
}
