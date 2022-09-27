import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { PickSheet } from '../pick-sheet';
import { PickSheetDetails } from '../pick-sheet-details';
import { PickSheetDetailsRequest } from '../pick-sheet-details-request';
import { UploadResource } from '../upload-resource';

@Component({
  selector: 'app-upload-resource',
  templateUrl: './upload-resource.component.html',
  styleUrls: ['./upload-resource.component.css']
})
export class UploadResourceComponent implements OnInit {

  uploadResourceForm = new FormGroup({});
  uploadResource: UploadResource = new UploadResource();
  pickSheetID!: number;
  pickSheet: PickSheet = new PickSheet();
  pickSheetDetails: PickSheetDetails = new PickSheetDetails();
  details: any;
  

  

  constructor(private _formBuilder: FormBuilder,
              private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uploadResourceForm = new FormGroup({
      'pickSheetNumber': new FormControl(),
      'shipmentNumber': new FormControl(),
      'pickSheetDate': new FormControl(),
      'deliveryDate': new FormControl(),
      'routeID': new FormControl(),
      'bay': new FormControl(),
      'bin': new FormControl(),
      'quantity': new FormControl(),
      'videoFile': new FormControl(),
      'recordDate': new FormControl(),
      'startTime': new FormControl(),
      'endTime': new FormControl(),
      'videoResultsRequest': new FormArray([
        this._formBuilder.group({
          'pickedProduct': new FormControl(''),
          'totalCases': new FormControl('')
        })
      ]),
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
      ]),
      'algoResultsRequest': new FormArray([
        this._formBuilder.group({
          'productImage': new FormControl(''),
          'productName': new FormControl('')
        })
      ])

    })
  }

  get videoResultsRequest(): FormArray{
    return this.uploadResourceForm.controls['videoResultsRequest'] as FormArray;
  }

  addVideoResults(){
    let videoResultsArr = this.uploadResourceForm.get('videoResultsRequest') as FormArray;
    let newVideoResults = this._formBuilder.group({
      pickedProduct: [''],
      totalCases: ['']
    });

    videoResultsArr.push(newVideoResults);
  }

  get pickSheetDetailsRequest(): FormArray{
    return this.uploadResourceForm.controls["pickSheetDetailsRequest"] as FormArray;
  }

  addPickSheetDetails(){
    let pickSheetDetailsArr = this.uploadResourceForm.get('pickSheetDetailsRequest') as FormArray;
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

  get algoResultsRequest(): FormArray{
    return this.uploadResourceForm.controls['algoResultsRequest'] as FormArray
  }

  addAlgoResults(){
    let algoResultsArr = this.uploadResourceForm.get('algoResultsRequest') as FormArray;
    let newAlgoResults = this._formBuilder.group({
      productName: [''],
      productImage: ['']
    });

    algoResultsArr.push(newAlgoResults);
  }

  removePickSheetDetails(i: number){
    this.pickSheetDetailsRequest.removeAt(i)
  }

  removeVideoResults(i: number){
    this.videoResultsRequest.removeAt(i)
  }

  removeAlgoResults(i: number){
    this.algoResultsRequest.removeAt(i)
  }

  onSubmit(formValue: FormGroup){
    console.log("Uploading Resource");

    const postBody = {
      pickSheetNumber: formValue.value.pickSheetNumber,
      shipmentNumber: formValue.value.shipmentNumber,
      pickSheetDate: formValue.value.pickSheetDate,
      deliveryDate: formValue.value.deliveryDate,
      routeID: formValue.value.routeID,
      bay: formValue.value.bay,
      bin: formValue.value.bin,
      quantity: formValue.value.quantity,
      videoFile: formValue.value.videoFile,
      recordDate: formValue.value.recordDate,
      startTime: formValue.value.startTime,
      endTime: formValue.value.endTime,
      videoResultsRequest: formValue.value.videoResultsRequest,
      algoResultsRequest: formValue.value.algoResultsRequest,
      pickSheetDetailsRequest: formValue.value.pickSheetDetailsRequest
    }
    
    this._service.uploadResource(postBody).subscribe(data =>{
      console.log(data);
      this.gotToViewPickSheet();
    },
    error => console.log(error));

  }

  gotToViewPickSheet(){
    this._router.navigate(['/pick-sheets']);
  }

}
