import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlgoResults } from '../algo-results';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-update-algo-results',
  templateUrl: './update-algo-results.component.html',
  styleUrls: ['./update-algo-results.component.css']
})
export class UpdateAlgoResultsComponent implements OnInit {

  algoResult: AlgoResults = new AlgoResults();
  id!: number;

  constructor(private _service: AppServiceService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.params['id'];
    this._service.getAlgoResultsById(this.id).subscribe(data =>{
      this.algoResult = data;
    }, error => console.log(error));

  }

  onSubmit(){

    this._service.getAlgoResultsById(this.id);
    this._service.updateAlgoResults(this.id, this.algoResult).subscribe(data =>{
      
      this.gotToViewAlgoResults();
    },
    error => console.log(error));    
  }


  gotToViewAlgoResults(){
    this._router.navigate(['/algo-results']);
  }

}
