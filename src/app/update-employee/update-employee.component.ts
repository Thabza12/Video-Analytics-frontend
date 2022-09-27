import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: any;
  id!: number;

  constructor(private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._service.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this._service.getEmployeeById(this.id);
    this._service.updateEmployee(this.id, this.employee).subscribe(data =>{
      
      this.gotToViewEmployees();
    },
    error => console.log(error));
    
  }


  gotToViewEmployees(){
    this._router.navigate(['/employees']);
  }

}
