import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { PickSheet } from '../pick-sheet';

@Component({
  selector: 'app-pick-sheet',
  templateUrl: './pick-sheet.component.html',
  styleUrls: ['./pick-sheet.component.css']
})
export class PickSheetComponent implements OnInit {

  pickSheets: PickSheet[] = []
  pickSheet: PickSheet = new PickSheet();

  constructor(private _service: AppServiceService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getPickSheets();
  }

  private getPickSheets(){
    this._service.viewPickSheets().subscribe(data =>{
      this.pickSheets = data
    })
  }

  updatePickSheet(pickSheetID: number){
    this._service.getPickSheetById(pickSheetID).subscribe(data =>{
      this.pickSheet = data
    });
    this._router.navigate(['update-pick-sheet', pickSheetID]);
    this._service.updatePicksheets(pickSheetID, this.pickSheet);
  }

  deletePickSheet(pickSheetID: number){
    this._service.deletePickSheet(pickSheetID).subscribe(data =>{
      console.log(data);
      this.getPickSheets();
    })
  }

}
