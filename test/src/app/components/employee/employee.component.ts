import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any;
  name:string;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  this.getEmployeesData();
  }
  getEmployeesData(){
   this.dataService.getData().subscribe(res=>{
      this.employees=res;
   });
  }
  deleteData(id){
    this.dataService.deleteData(id).subscribe(res=>{
      this.getEmployeesData();
    })
  }
}
