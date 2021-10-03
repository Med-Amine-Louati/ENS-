import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StudentService } from '../services/student';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  classes = [
    { id: 1, name: "classe 1" },
    { id: 2, name: "classe 2" },
    { id: 3, name: "classe 3" },
    { id: 4, name: "classe 4" },
    { id: 5, name: "classe 5" }
  ];
  student: FormGroup;
  httpOptions: { headers: any; };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private studentService: StudentService,


  ) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/students/index').subscribe(result => {
      console.log(result);
    })



    this.student = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],

      email: ['', Validators.required],
      phone: ['', Validators.required],
      class_ext_id: ['', Validators.required],

    });



}

get f () {
  return this.student.controls;
}
onSubmit() {
  this.http.post('http://localhost:8000/subjects/add',{student:this.student.value}).subscribe((Response)=>{

    console.log(Response)
  })
}
}
