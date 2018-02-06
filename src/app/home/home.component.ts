import { Component, OnInit } from '@angular/core';
import { DbconnectService } from '../dbconnect.service';
import Chart from 'chart.js';
import * as jsPDF from 'jsPDF';

import * as $ from "jquery";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  private usertoken;
  private username;
  private email;
  private photourl;
  people: any[] = [
    { "firstname": "vivek", "lastname": "singh", "profession": "engineer" },
    { "firstname": "yamini", "lastname": "singh", "profession": "doctor" },
    { "firstname": "swati", "lastname": "sharma", "profession": "plumber" },
  ];








  constructor(private auth: DbconnectService) { }

  ngOnInit() {

    this.usertoken = (sessionStorage.getItem("token"));
    this.username = (sessionStorage.getItem("username"));
    this.email = (sessionStorage.getItem("email"));
    this.photourl = (sessionStorage.getItem("photourl"));

    console.log(this.usertoken);
  }
  ngOnDestroy() {
   // sessionStorage.clear();
  }




  addfn(firstname, lastname, profession) {

    this.people.push({ "firstname": firstname, "lastname": lastname, "profession": profession })


  }

  generatepdf() {

    var doc = new jsPDF();
    doc.text('Hello world!', 10, 10)
    // doc.fromHTML($('#tablePDF').get(0), 15, 15, {
    //     'width': 170});
    doc.save('sample-file.pdf');

  }




}



