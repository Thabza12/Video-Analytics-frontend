import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { PickSheetDetails } from '../pick-sheet-details';

@Component({
  selector: 'app-pick-sheet-details',
  templateUrl: './pick-sheet-details.component.html',
  styleUrls: ['./pick-sheet-details.component.css']
})
export class PickSheetDetailsComponent implements OnInit {

  pickSheetDetails: PickSheetDetails[] = []
  pickSheetDetail: PickSheetDetails = new PickSheetDetails();

  constructor(private _service: AppServiceService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getPickSheetDetails();
  }

  private getPickSheetDetails(){
    this._service.viewPickSheetDetails().subscribe(data =>{
      this.pickSheetDetails = data
    })
  }

  updatePickSheetDetails(id: number){
    this._service.getPickSheetDetailsById(id).subscribe(data =>{
      this.pickSheetDetail = data
    });
    this._router.navigate(['update-pick-sheet-details', id]);
    this._service.updatePicksheetDetails(id, this.pickSheetDetail);
  }

  deletePickSheetDetails(id: number){
    this._service.deletePickSheetDetails(id).subscribe(data =>{
      console.log(data);
      this.getPickSheetDetails();
    })
  }

}
