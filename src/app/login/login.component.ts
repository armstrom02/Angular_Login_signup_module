import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbconnectService } from '../dbconnect.service';
import { Router } from '@angular/router';
import { SocialUser } from 'ng4-social-login';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;



  constructor(private auth: DbconnectService, private router: Router, private authService: AuthService) { }



  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }


  loginfn(userid, password) {

    var regex = /^[0-9]+$/;
    if (userid.length != 0 && password.length != 0) {
      if (userid.match(regex)) {
        this.auth.login_user_phone(userid, password).subscribe(response => {
          console.log(response)
          if (response.success) {
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("username", response.body.name);
            this.router.navigate(['Home']);
          }
          else alert("password is wrong")
        });
      }
      else {
        this.auth.login_user_email(userid, password).subscribe(response => {
          console.log(response)
          if (response.success) {
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("username", response.body.name);
            this.router.navigate(['Home']);
          }
          else alert("password is wrong")
        });


      }
    }
    else alert("field id empty");


  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {

      this.auth.check_user(res.email).subscribe(response => {

        if (response.success) {
          this.router.navigate(['Home']);
          sessionStorage.setItem("username", this.user.name);
          sessionStorage.setItem("email", this.user.email);
          sessionStorage.setItem("photourl", this.user.photoUrl);
          sessionStorage.setItem("token", this.user.token);
          console.log(this.user);
        }
        else {
          this.router.navigate(['socialsignup']);
          sessionStorage.setItem("socialName", this.user.name);
          sessionStorage.setItem("socialEmail", this.user.email);
          sessionStorage.setItem("socialId", this.user.id);
          sessionStorage.setItem("socialProvider", this.user.provider);
        }



      });
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => {
      this.auth.check_user(res.email).subscribe(response => {

        if (response.success) {
          this.router.navigate(['Home']);
          sessionStorage.setItem("username", this.user.name);
          sessionStorage.setItem("email", this.user.email);
          sessionStorage.setItem("photourl", this.user.photoUrl);
          sessionStorage.setItem("token", this.user.token);
          console.log(this.user);
        }
        else {
          this.router.navigate(['socialsignup']);
          sessionStorage.setItem("socialName", this.user.name);
          sessionStorage.setItem("socialEmail", this.user.email);
          sessionStorage.setItem("socialId", this.user.id);
          sessionStorage.setItem("socialProvider", this.user.provider);
        }

      });
    });

  }

  signOut(): void {
    this.authService.signOut();
  }

}




