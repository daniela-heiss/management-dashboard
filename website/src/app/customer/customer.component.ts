import { Component, OnInit } from '@angular/core';
import { CustomerDTO } from "../model/customerDTO";
import { CustomerService } from "../service/customer.service";
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit{
  //li: any;
  public customer: CustomerDTO;
  private customerService: CustomerService;
  public customers: Observable<CustomerDTO[]>;
  public errorMessage: string;
  customerss!: CustomerDTO [];
  

  constructor(customerService: CustomerService){
    //this.li = Response;
    //this.lis = this.customerService.listCustomers();
    this.customer = new CustomerDTO("12345", "Terry Berry", "Mainzer Straße 50", "DE", '176223454', 123412.09, "whatIsThis?", "hello");
    this.customerService = customerService;
    this.customers = this.customerService.listCustomers();//.subscribe((customers) => (this.customers = customers));//.subscribe(customers: CustomerDTO[]) => this.customers = customers, (error: any) => this.errorMessage = <any>error);
    //c
    this.errorMessage='';

  }

  ngOnInit() {
    //this.customers = this.customerService.listCustomers();
    console.dir(this.customers);
    this.customerService.listCustomers()
    .subscribe(
      res => console.log(res)
    );
    //this.getCustomer();
    //console.log(JSON.stringify(this.customers))
    /*this.http.get('http://127.0.0.1:8080/orders').subscribe(Response =& gt; {
      if (Response){
        hideloader();
      }
      console.log(Response)
      this.li = Response;
      this.lis = this.li.list;
    });
    function hideloader(){
      document.getElementById('loading')?.style.display = 'none';
    }*/
  }

  private getCustomer(){
    this.customerService.listCustomers().subscribe(data =>{
      this.customerss = data;
    });

}
}
