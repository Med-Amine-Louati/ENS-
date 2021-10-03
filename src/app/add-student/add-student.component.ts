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
  first_name : String;
  last_name : String;
  email :String;
  phone : String;
  class_ext_id: Number;

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
    private router: Router,


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
  console.log(this.student.value);

  this.http.post<any>('http://localhost:8000/students/add',this.student.value).subscribe((Response)=>{

    console.log(Response)
    this.router.navigate(['/']);

  },(error) => {
    //Handle the error here
    //If not handled, then throw it
    console.log(error.error.error_message); ;
 }
  )
}


}
