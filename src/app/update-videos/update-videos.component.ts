import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-update-videos',
  templateUrl: './update-videos.component.html',
  styleUrls: ['./update-videos.component.css']
})
export class UpdateVideosComponent implements OnInit {

  video: Videos = new Videos();
  id!: number;

  constructor(private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.params['id'];
    this._service.getVideosById(this.id).subscribe(data =>{
      this.video = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this._service.getVideosById(this.id);
    this._service.updateVideo(this.id, this.video).subscribe(data =>{
      
      this.gotToViewVideos();
    },
    error => console.log(error));
    
    
  }


  gotToViewVideos(){
    this._router.navigate(['/videos']);
  }

}
