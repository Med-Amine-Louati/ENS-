import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  constructor(private http: HttpClient,
        ) {}

addStudent(data: any){

  return this.http.post('http://127.0.0.1:8000/students/add',data)
}

}
