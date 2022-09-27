import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { VideosResource } from '../videos-resource';

@Component({
  selector: 'app-upload-videos',
  templateUrl: './upload-videos.component.html',
  styleUrls: ['./upload-videos.component.css']
})
export class UploadVideosComponent implements OnInit {

  uploadVideosForm = new FormGroup({});
  videosResource: VideosResource = new VideosResource();

  constructor(private _formBuilder: FormBuilder,
              private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.uploadVideosForm = new FormGroup({
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
      'algoResultsRequest': new FormArray([
        this._formBuilder.group({
          'productImage': new FormControl(''),
          'productName': new FormControl('')
        })
      ])

    })

  }

  get videoResultsRequest(): FormArray{
    return this.uploadVideosForm.controls['videoResultsRequest'] as FormArray;
  }

  addVideoResults(){
    let videoResultsArr = this.uploadVideosForm.get('videoResultsRequest') as FormArray;
    let newVideoResults = this._formBuilder.group({
      pickedProduct: [''],
      totalCases: ['']
    });

    videoResultsArr.push(newVideoResults);
  }

  get algoResultsRequest(): FormArray{
    return this.uploadVideosForm.controls['algoResultsRequest'] as FormArray
  }

  addAlgoResults(){
    let algoResultsArr = this.uploadVideosForm.get('algoResultsRequest') as FormArray;
    let newAlgoResults = this._formBuilder.group({
      productName: [''],
      productImage: ['']
    });

    algoResultsArr.push(newAlgoResults);
  }

  removeVideoResults(i: number){
    this.videoResultsRequest.removeAt(i)
  }

  removeAlgoResults(i: number){
    this.algoResultsRequest.removeAt(i)
  }

  onSubmit(formValue: FormGroup){

    const postBody = {
      videoFile: formValue.value.videoFile,
      recordDate: formValue.value.recordDate,
      startTime: formValue.value.startTime,
      endTime: formValue.value.endTime,
      videoResultsRequest: formValue.value.videoResultsRequest,
      algoResultsRequest: formValue.value.algoResultsRequest
    }
    
    this._service.uploadVideosResource(postBody).subscribe(data =>{
      console.log(data);
      this.gotToViewVideos();
    },
    error => console.log(error));

  }

  gotToViewVideos(){
    this._router.navigate(['/videos']);
  }

}
