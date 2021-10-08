import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
  classes = [
    { id: 1, name: "classe 1" },
    { id: 2, name: "classe 2" },
    { id: 3, name: "classe 3" },
    { id: 4, name: "classe 4" },
    { id: 5, name: "classe 5" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
