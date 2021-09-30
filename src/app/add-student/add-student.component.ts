import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.student = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],

      email: ['', Validators.required],
      phone: ['', Validators.required],
      classe: ['', Validators.required],
    });



}
get f () {
  return this.student.controls;
}
onSubmit() {

  console.warn(this.student.value)
}
}
