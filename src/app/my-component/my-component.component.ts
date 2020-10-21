import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Employee';
import { EmpTAAService } from '../emp-taa.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private empService:EmpTAAService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      (data) => {
        console.log(data);
        const res = data as any[];
        res.forEach((element, index) => {
          const e = new Employee(element.firstname, element.lastname);
          this.employees.push(e);
        });
      }
    );
    console.log(this.employees);
  }

  employees:Array<Employee> = [];

  firstname:string;
  lastname:string;

  //Il faut changer le type de retour du POST 
  //dans le server JAXRS pour Employee et non plus Response.
  onClick(){
    const e = new Employee(this.firstname, this.lastname);
    console.log("add " + e)
    this.empService.addEmployee(e).subscribe(
      (e) => this.employees.push(e)
    )
  }

}
