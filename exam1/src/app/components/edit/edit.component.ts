import { Component, OnInit } from '@angular/core';
import { Awesome } from 'awesome';

import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  data:any;
  awesome = new Awesome();
  constructor(private route:ActivatedRoute, private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }
  getData(){
    this.dataService.getEmployeeById(this.id).subscribe(res=>{
      // console.log(res);
      this.data=res;
      this.awesome=this.data;
    })
  }
  update(){
    this.dataService.updateData(this.id, this.awesome).subscribe(res=>{
      this.router.navigateByUrl("");
    });
  }
  deleteAwesome(id){
    this.dataService.deleteData(id).subscribe(res=>{
      this.router.navigateByUrl("");
    })
  }

}
