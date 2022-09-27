import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { PickSheetResource } from '../pick-sheet-resource';

@Component({
  selector: 'app-upload-pick-sheet',
  templateUrl: './upload-pick-sheet.component.html',
  styleUrls: ['./upload-pick-sheet.component.css']
})
export class UploadPickSheetComponent implements OnInit {

  uploadPickSheetForm = new FormGroup({});
  pickSheetResource: PickSheetResource = new PickSheetResource();
  id!: number
  videoData: any

  constructor(private _formBuilder: FormBuilder,
              private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._service.getVideosById(this.id).subscribe(data =>{
      this.videoData = data;
      console.log(this.videoData);
    }, error => console.log(error))
    
    this.uploadPickSheetForm = new FormGroup({
      'pickSheetNumber': new FormControl(),
      'shipmentNumber': new FormControl(),
      'pickSheetDate': new FormControl(),
      'deliveryDate': new FormControl(),
      'routeID': new FormControl(),
      'bay': new FormControl(),
      'bin': new FormControl(),
      'quantity': new FormControl(),
      'pickSheetDetailsRequest': new FormArray([
        this._formBuilder.group({
          'zone': new FormControl(''),
          'pack': new FormControl(''),
          'flavour': new FormControl(''),
          'hands': new FormControl(''),
          'layers': new FormControl(''),
          'totalCases': new FormControl(''),
          'sku': new FormControl('')
        })
      ])
    })
  }

  get pickSheetDetailsRequest(): FormArray{
    return this.uploadPickSheetForm.controls["pickSheetDetailsRequest"] as FormArray;
  }

  addPickSheetDetails(){
    let pickSheetDetailsArr = this.uploadPickSheetForm.get('pickSheetDetailsRequest') as FormArray;
    let newPicksheetDetails = this._formBuilder.group({
      zone: [''],
      pack: [''],
      flavour: [''],
      hands: [''],
      layers: [''],
      totalCases: [''],
      sku: ['']
    });

    pickSheetDetailsArr.push(newPicksheetDetails);
  }

  removePickSheetDetails(i: number){
    this.pickSheetDetailsRequest.removeAt(i)
  }

  onSubmit(formValue: FormGroup){

    const postBody = {
      pickSheetNumber: formValue.value.pickSheetNumber,
      shipmentNumber: formValue.value.shipmentNumber,
      pickSheetDate: formValue.value.pickSheetDate,
      deliveryDate: formValue.value.deliveryDate,
      routeID: formValue.value.routeID,
      bay: formValue.value.bay,
      bin: formValue.value.bin,
      quantity: formValue.value.quantity,
      pickSheetDetailsRequest: formValue.value.pickSheetDetailsRequest,
    
    }
    
    this._service.uploadPickSheetResource(this.id, postBody).subscribe(data =>{
      console.log(data);
      this.gotToViewPickSheet();
    },
    error => console.log(error));

  }

  gotToViewPickSheet(){
    this._router.navigate(['/pick-sheets']);
  }

}
