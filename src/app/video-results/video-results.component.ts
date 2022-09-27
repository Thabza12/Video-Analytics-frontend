import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { VideoResults } from '../video-results';

@Component({
  selector: 'app-video-results',
  templateUrl: './video-results.component.html',
  styleUrls: ['./video-results.component.css']
})
export class VideoResultsComponent implements OnInit {

  videoResults: VideoResults[] = []
  videoResult: VideoResults = new VideoResults();

  constructor(private _service: AppServiceService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getVideoResults();
  }

  private getVideoResults(){
    this._service.viewVideoResults().subscribe(data =>{
      this.videoResults = data
    })
  }

  updateVideoResults(id: number){
    this._service.getVideoResultsById(id).subscribe(data =>{
      this.videoResult = data
    });
    this._router.navigate(['update-videos-results', id]);
    this._service.updateVideoResults(id, this.videoResult);
    
  }

  deleteVideoResults(id: number){
  
    this._service.deleteVideoResults(id).subscribe(data =>{
      console.log(data);
      this.getVideoResults();
    })
    
  }

}
