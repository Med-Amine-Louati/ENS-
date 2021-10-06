import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  today= new Date();
  todaysDataTime = '';

  constructor() {
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+1');
    console.log(this.today)
  }


  ngOnInit(): void {
  }

}
