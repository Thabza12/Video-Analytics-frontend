import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit {

  public loggedIn: boolean = false;

  constructor(private _service: AppServiceService,
              private _router: Router) { }

  ngOnInit(): void {
    this._service.authStatus.subscribe(value =>
      this.loggedIn = value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this._service.remove();
    this._service.changeAuthStatus(false);
    this._router.navigate(['/login']);
  }

  

}
