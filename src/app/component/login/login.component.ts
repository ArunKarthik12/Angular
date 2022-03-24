import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string | undefined;
  password:string | undefined;
  router: any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email === "abc@gmail.com" && this.password === "abc"){
      // alert("welcome");
      this.route.navigate(['/products']);
    }
    else{
      alert(" Invalid Credentials .! ");
    }
  }

}
