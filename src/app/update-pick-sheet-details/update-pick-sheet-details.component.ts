import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { PickSheetDetails } from '../pick-sheet-details';

@Component({
  selector: 'app-update-pick-sheet-details',
  templateUrl: './update-pick-sheet-details.component.html',
  styleUrls: ['./update-pick-sheet-details.component.css']
})
export class UpdatePickSheetDetailsComponent implements OnInit {

  pickSheetDetails: PickSheetDetails = new PickSheetDetails();
  id!: number;

  constructor(private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.params['id'];
    this._service.getPickSheetDetailsById(this.id).subscribe(data =>{
      this.pickSheetDetails = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this._service.getPickSheetDetailsById(this.id);
    this._service.updatePicksheetDetails(this.id, this.pickSheetDetails).subscribe(data =>{
      
      this.gotToViewPickSheetDetails();
    },
    error => console.log(error));
    
    
  }


  gotToViewPickSheetDetails(){
    this._router.navigate(['/pick-sheets-details']);
  }

}
