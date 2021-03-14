import { Employee } from './../../../employee';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    salary: new FormControl('', [Validators.required,Validators.pattern("[0-9]*")])
  });
  employees:any;
  employee= new Employee();
  constructor(private route:ActivatedRoute ,private router:Router ,private dataService:DataService) { }

  ngOnInit(): void {
  }
  insertData(){
    this.dataService.insertData(this.employee).subscribe(res=>{
       this.router.navigateByUrl("");
     });
  }
}
