import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(private _service: AppServiceService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._service.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      );
  }

  handleResponse(data: any){
    this._service.handleToken(data.access_token);
    this._service.changeAuthStatus(true);
    this._router.navigate(['/profile']);
  }

  handleError(error:any){
    this.error = error.error.error;
  }

}
