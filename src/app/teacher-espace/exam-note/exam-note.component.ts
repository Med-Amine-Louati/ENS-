import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-exam-note',
  templateUrl: './exam-note.component.html',
  styleUrls: ['./exam-note.component.css']
})
export class ExamNoteComponent implements OnInit {
students=[
  {
   id : Number,
   first_name : String,
   last_name : String,
   email : String,
   phone : String,
   class_ext_id : Number
  }
];




  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }



  ngOnInit(): void {
    this.http.get<any>('http://localhost:8000/students/index').subscribe(result => {
      this.students = result.content;
        console.log(this.students[0].phone);
      })


    }
}
