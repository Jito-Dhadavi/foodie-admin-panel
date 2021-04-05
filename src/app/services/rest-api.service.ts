import { Injectable } from '@angular/core';
import { ApiCallService } from './api/api-call.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private api: ApiCallService) { }

  signUp(params) {
    return this.api.postData(this.api.signup, params)
  }
  login(params) {
    console.log('params: ', params);
    return this.api.postData(this.api.signin, params)
  }
}
