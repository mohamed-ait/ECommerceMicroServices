import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customerId! : Number;
  orders:any;
  constructor(private http:HttpClient, private router:Router,private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId']
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/orders/search/byCustomer?projection=fullOrder&customerId="+this.customerId).subscribe({
      next: (data) => {
        this.orders=data;
      },
      error: (err) => {}
    });

  }
  getOrderDetails(id :any){
    this.router.navigateByUrl("/orderDetails/"+id);
  }

}
