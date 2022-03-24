import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

public products : any = [];
  x:number=0;
  name:string=' ';
  email:string=' ';
  Address1:string=' ';
  Address2:string=' ';
  City:string=' ';
  State:string=' ';
  Zip:number | undefined;

  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {



    this.x = Math.floor((Math.random() * 1000000) + 1);

    this.cartService.getProducts()
    
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();


    })
  }

  setName(event: any) {
  // alert(event.target.value);
    this.name = event.target.value ;
  }
  setEmail(event: any){
    this.email = event.target.value;
  }
  setAddress1(event: any){
    this.Address1 = event.target.value;
  }
  setAddress2(event: any){
    this.Address2 = event.target.value;
  }
  setCity(event: any){
    this.City = event.target.value;
  }
  setZip(event: any){
    this.Zip = event.target.value;
  }
  setState(event: any){
    // alert("hi");
    this.State = event.target.value;
  }
}
