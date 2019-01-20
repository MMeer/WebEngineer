import {Component, OnInit} from '@angular/core';
import {WasteService} from "./waste.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'webengineer';
  results = [];
  searchParams = "";
  constructor(public wasteService:WasteService){

  }

  ngOnInit(){
    return this.wasteService.getWaste().pipe(
      tap(result => this.results = result)
    ).subscribe();
  }

  submit() {
    this.wasteService.getWaste(this.searchParams).pipe(
      tap(result => this.results = result)
    ).subscribe();
  }

}
