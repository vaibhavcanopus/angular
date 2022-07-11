import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrService {

  list:string[] = []
  // private subject = new Subject<any>();
  getdata(){
   return this.list
  } 
  setdata(i:any){

    let mydata = this.list.push(i)
  }
  
}
