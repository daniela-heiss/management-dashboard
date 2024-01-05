import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

}

const Orders = [
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
]

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