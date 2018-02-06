import { Component, OnInit } from '@angular/core';
import { DbconnectService } from '../dbconnect.service';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-socialsignup',
  templateUrl: './socialsignup.component.html',
  styleUrls: ['./socialsignup.component.css']
})
export class SocialsignupComponent implements OnInit {

  private socialName = (sessionStorage.getItem("socialName"));
  private socialEmail = (sessionStorage.getItem("socialEmail"));
  private socialId = (sessionStorage.getItem("socialId"));
  private socialProvider = (sessionStorage.getItem("socialProvider"));


  constructor(private createusr: DbconnectService, private router: Router) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    sessionStorage.clear();
  }

  createSocialUser(name, email, password, ) {

    if (this.socialProvider == "FACEBOOK") {

      var obj_email_facebook = { name: name, email: email, password: password, facebook_id: this.socialId };

      this.createusr.create_user(obj_email_facebook).subscribe(data => {
        this.router.navigate(['/login']);
        console.log(data);
        sessionStorage.clear();
        alert("Signup Succesfull");
      });
    }
    else {

      var obj_email_gmail = { name: name, email: email, password: password, google_id: this.socialId };

      this.createusr.create_user(obj_email_gmail).subscribe(data => {
        this.router.navigate(['/login']);
        console.log(data);
        sessionStorage.clear();
        alert("Signup Succesfull");
      });


    }

  }

}
