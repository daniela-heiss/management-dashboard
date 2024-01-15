import { Component, OnInit } from '@angular/core';
import { OrdersDTO } from "../model/ordersDTO";
import { OrdersService } from "../service/orders.service";
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  private ordersService: OrdersService;
  public orders: Observable<OrdersDTO[]>;
  public errorMessage: string;
  /*li: any;
  lis = [];*/
  constructor(ordersService: OrdersService){
    //this.li = Response;
    //this.lis = this.customerService.listCustomers();
    this.ordersService = ordersService;
    this.orders = this.ordersService.listOrders();//.subscribe(customers: CustomerDTO[]) => this.customers = customers, (error: any) => this.errorMessage = <any>error);
    this.errorMessage='';
  }
  ngOnInit(): void {
    this.orders = this.ordersService.listOrders();
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
    }
  }*/
}
}


/*const Orders = [
  {
      orderNumber: '',
      customerNumber: '',
      status: '',
      totalPrice: '',
      orderDate:'',
      orderPriority: '',
      clerk: '',
      shippingPriority: '',
      comments: ''
  },
  {
    orderNumber: '',
    customerNumber: '',
    status: '',
    totalPrice: '',
    orderDate:'',
    orderPriority: '',
    clerk: '',
    shippingPriority: '',
    comments: ''
  },
]*/

//Orders.forEach(order => {
  //const tr = document.createElement('tr');
  //const trContent = `
    //  <td>${order.orderNumber}</td>
      //<td>${order.customerNumber}</td>
      //<td>${order.status}</td>
      //<td>${order.totalPrice}</td>
      //<td>${order.orderDate}</td>
      //<td>${order.orderPriority}</td>
      //<td>${order.clerk}</td>
      //<td>${order.shippingPriority}</td>
      //<td>${order.comments}</td>
  //`;
  //tr.innerHTML = trContent;
  //document.querySelector('table tbody').appendChild(tr);
//});