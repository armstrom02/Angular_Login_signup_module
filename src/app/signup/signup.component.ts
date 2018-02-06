import { Component, OnInit } from '@angular/core';
import { DbconnectService } from '../dbconnect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private secretotp = 1234;
  private actotp: boolean = false;
  private inputotp;

  constructor(private createusr: DbconnectService, private router: Router) { }

  ngOnInit() {
  }

  send(name,userid,password) {

    let otp=this.inputotp;
    console.log(name + " " + userid + " " + password + " " + otp)
    if (name.length != 0 && userid.length != 0 && password.length != 0) {
      var regex = /^[0-9]+$/;
      if (userid.match(regex)) {
        if (otp == this.secretotp) {
          var obj_phone = { name: name, phone: userid, password: password };
          this.createusr.create_user(obj_phone).subscribe(data => {
            this.router.navigate(['/login']);
            alert("Signup Succesfull");
            console.log(data);
          });
        } else alert("Wrong OTP")
      }
      else {
        this.createusr.check_user(userid).subscribe(response => {
          if (!response.success) {
            var obj_email = { name: name, email: userid, password: password };
            this.createusr.create_user(obj_email).subscribe(data => {
              this.router.navigate(['/login']);
              console.log(data);
              alert("Signup Succesfull");
            });
          } else alert("Email Exists")
        });
      }
    }
    else alert("field in empty")
  }

  requestotp(phone) {
    console.log(phone);
    this.createusr.request_otp(phone).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.secretotp = data.secretotp;
      }
    });
  }

  checkinput(userid) {
    var regex = /^[0-9]+$/;
    if (userid.match(regex)) {
      if (userid.length == 10) {
        this.actotp = true;
      } else alert("invalid Mobile Number")
    } else {
      var emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (userid.match(emailregex)) {
        this.actotp = true;
      } else alert("invalid Email");
      this.actotp = false;
    }
  }

userotp(otp){
this.inputotp=otp;
 }

}