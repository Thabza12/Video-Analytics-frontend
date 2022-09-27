import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Videos[] = []
  video: Videos = new Videos();

  constructor(private _service: AppServiceService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getVideos();
  }

  private getVideos(){
    this._service.viewVideos().subscribe(data =>{
      this.videos = data
    })
  }

  updateVideo(id: number){
    this._service.getVideosById(id).subscribe(data =>{
      this.video = data
    });
    this._router.navigate(['update-video', id]);
    this._service.updateVideo(id, this.video);
    
  }

  deleteVideo(id: number){
    this._service.getVideosById(id).subscribe(data =>{
      console.log(data);
      this._service.deleteVideo(id).subscribe(data =>{
        console.log(data);
        this.getVideos();
      })
    })
    
  }

  uploadPickSheet(id: number){
    this._router.navigate(['upload-pick-sheet', id])
  }

}
