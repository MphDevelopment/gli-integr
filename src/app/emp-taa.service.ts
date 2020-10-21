import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpTAAService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get('/api/employee');
  }

  addEmployee(emp : Employee):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<Response>('/api/employee', emp, httpOptions);
  }
}
