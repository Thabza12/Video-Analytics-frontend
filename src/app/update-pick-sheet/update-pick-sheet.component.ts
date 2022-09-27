import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { PickSheet } from '../pick-sheet';

@Component({
  selector: 'app-update-pick-sheet',
  templateUrl: './update-pick-sheet.component.html',
  styleUrls: ['./update-pick-sheet.component.css']
})
export class UpdatePickSheetComponent implements OnInit {

  pickSheet: PickSheet = new PickSheet();
  pickSheetID!: number;

  constructor(private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pickSheetID = this._route.snapshot.params['pickSheetID'];
    this._service.getPickSheetById(this.pickSheetID).subscribe(data =>{
      this.pickSheet = data;
    }, error => console.log(error));

  }

  onSubmit(){
    this._service.getPickSheetById(this.pickSheetID);
    this._service.updatePicksheets(this.pickSheetID, this.pickSheet).subscribe(data =>{
      
      this.gotToViewPickSheet();
    },
    error => console.log(error));
    
  }


  gotToViewPickSheet(){
    this._router.navigate(['/pick-sheets']);
  }

}
