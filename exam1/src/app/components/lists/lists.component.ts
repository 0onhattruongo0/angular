import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  awesomes:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getListData();
  }
  getListData(){
    this.dataService.getData().subscribe(res=>{
      this.awesomes=res;
    })
  }

}
