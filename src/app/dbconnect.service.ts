import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DbconnectService {

  constructor(private http : Http) { }
  private myroute = "localhost:3000/";

  create_user(user){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://'+this.myroute+'user',user,options);
  }
  
  login_user_email(email,password){

    console.log(email);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    let credentials:object ={email:email,password:password}
     return this.http.post('http://'+this.myroute+'user/login/email',credentials,options).map((res:Response)=>res.json());
  }

  login_user_phone(phone,password){

    console.log(phone);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    let credentials:object ={phone:phone,password:password}
     return this.http.post('http://'+this.myroute+'user/login/phone',credentials,options).map((res:Response)=>res.json());
  }


  check_user(email){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    let credentials:object ={email:email}
     return this.http.post('http://'+this.myroute+'user/login',credentials,options).map((res:Response)=>res.json());
  }
  
  request_otp(num){
   var nume=91+num
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    let credentials:object ={phone:nume}
     return this.http.post('http://'+this.myroute+'sendotp',credentials,options).map((res:Response)=>res.json());
  }

  get_user(token){
    let headers = new Headers({'Authorization':token});
    let options = new RequestOptions({headers: headers});
     return this.http.get('http://'+this.myroute+'demo/test',options).map((res:Response)=>res.json());
  }

  login_social_user(socialuser){
    let credentials:object ={name:socialuser.name,password:"password123",email:socialuser.email,imageUrl:socialuser.photoUrl,login:socialuser.email}
  let headers = new Headers({'Content-Type':'application/json'});
  let options = new RequestOptions({headers: headers});
  return this.http.post('http://192.168.15.57:8080/api/register/social',credentials,options).map((res:Response)=>res.json());
  }
  


  
}

