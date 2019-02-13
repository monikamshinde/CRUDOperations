import { Component, OnInit } from '@angular/core';
import { CustomerServService } from '../shared/customer-serv.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private sr:CustomerServService) { }
  customerArray = [];
  showDeleteMessage:boolean;
  searchText:string="";
  ngOnInit() {//customerList will be initialized here
    this.sr.getCustomers().subscribe((list)=>{
      this.customerArray=list.map(
        (item)=>{
          return{
            $key:item.key,
            ...item.payload.val()
          };
        });
    });
  }

  deleteit($key){
    if(confirm('are you sure to delete this record?')){
    this.sr.deleteCustomer($key);
    this.showDeleteMessage=true;
    setTimeout(()=>this.showDeleteMessage=false,5000);
  }
  }

  filterCondition(customer){
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
