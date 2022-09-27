import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-request-rest',
  templateUrl: './request-rest.component.html',
  styleUrls: ['./request-rest.component.css']
})
export class RequestRestComponent implements OnInit {

  public form = {
    email: null
  };

  constructor(private _service: AppServiceService,
    private _notify: SnotifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._service.passwordReset(this.form).subscribe(data =>
      this.handleResponse(data),
      error => this._notify.error(error.error.error)
      
      );

  }

  handleResponse(res: any){
    console.log(res);
    this.form.email = null;
  }

}
