import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Awesome } from 'awesome';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form = new FormGroup({
      tag: new FormControl('', [Validators.required,Validators.minLength(5)]),
      url: new FormControl('', [Validators.required,Validators.minLength(10)]),
      description: new FormControl('', Validators.required),
  });

  awesome = new Awesome();
  constructor(private route:ActivatedRoute, private router:Router, private dataService:DataService) { }
  ngOnInit(): void {
  }
  insertData(){
    this.dataService.insertData(this.awesome).subscribe(res=>{
       this.router.navigateByUrl("");
     });
  }

}
