import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-upload-employee',
  templateUrl: './upload-employee.component.html',
  styleUrls: ['./upload-employee.component.css']
})
export class UploadEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private _service: AppServiceService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee);
    this._service.uploadEmployee(this.employee).subscribe();
    this.goToEmployees();
    
  }

  goToEmployees(){
    this._router.navigate(['employees']);
  }

}
