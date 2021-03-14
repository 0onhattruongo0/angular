import { Employee } from './../../../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id:any;
  data:any;
  employee = new Employee();
  constructor(private route:ActivatedRoute, private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }
  getData(){
    this.dataService.getEmployeeById(this.id).subscribe(res=>{
      // console.log(res);
      this.data=res;
      this.employee=this.data;
    })
  }
  updateEmployee(){
    this.dataService.updateData(this.id, this.employee).subscribe(res=>{
      this.router.navigateByUrl("");
    });
  }

}
