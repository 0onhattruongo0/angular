import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from "../employee";

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(employees:any, name:string): Employee {
    if(!employees || !name){
      return employees;
    }
    return employees.filter(Employee => Employee.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
  }

}
