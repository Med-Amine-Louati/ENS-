import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/teachers/index').subscribe((data) => {

      console.log(data)

    })

  }

}

