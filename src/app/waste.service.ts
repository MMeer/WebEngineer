import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {filter, map, take, tap} from "rxjs/operators";
// import {filterErrorsAndWarnings} from "@angular/compiler-cli";

const WASTE_WIZARD_URL = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"

@Injectable({
  providedIn: 'root'
})
export class WasteService {

  constructor(private http: HttpClient) { }

  getWaste(searchParams?): Observable<any>{
    return this.http.get(WASTE_WIZARD_URL).pipe(
      map((resultList: any[]) =>
        resultList.filter(item => !searchParams ? true : item.keywords && item.keywords.indexOf(searchParams) >= 0))
    );
  }
}
