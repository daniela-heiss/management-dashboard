import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent /*implements OnInit*/ {
  /*li: any;
  lis = [];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8080/orders').subscribe(Response =& gt; {
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