import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-teacher-espace',
  templateUrl: './teacher-espace.component.html',
  styleUrls: ['./teacher-espace.component.css']
})
export class TeacherEspaceComponent implements OnInit {



  today= new Date();
  todaysDataTime = '';

  constructor() {
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+1');
    console.log(this.today)
  }


  ngOnInit(): void {

  }

}
