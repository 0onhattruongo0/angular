import { Employee } from './../../employee';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {
  employee:any;
  employee1= new Employee();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData(){
     this.dataService.getData().subscribe(res=>{
       this.employee= res;
     });
  }
  insertData(){
    this.dataService.insertData(this.employee1).subscribe(res=>{
       this.getEmployeeData();
     });
  }
  deleteData(id){
     this.dataService.deleteData(id).subscribe(res=>{
       this.getEmployeeData();
     });
  }

}
