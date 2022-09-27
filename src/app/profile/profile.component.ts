import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  addResource(){
    this._router.navigate(['upload-resource'])
  }

  uploadVideo(){
    this._router.navigate(['upload-video'])
  }

  viewVideos(){
    this._router.navigate(['videos'])

  }

  viewAlgoResults(){
    this._router.navigate(['algo-results'])

  }

  viewVideoResults(){
    this._router.navigate(['video-results'])

  }

  viewPickSheets(){
    this._router.navigate(['pick-sheets'])
  }

  viewPickSheetDetails(){
    this._router.navigate(['pick-sheet-details'])

  }

}
