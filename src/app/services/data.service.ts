import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  location = new BehaviorSubject(null);


  constructor() { }

  setLocation(data) {
    this.location.next(data)
  }
  getLocation() {
    return this.location
  }
  
}
