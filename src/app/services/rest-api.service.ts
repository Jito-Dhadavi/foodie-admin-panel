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
  getCategory() {
    return this.api.getData(this.api.category)
  }
  addCateogry(params) {
    return this.api.postData(this.api.category, params)
  }
  editCateogry(id, params) {
    return this.api.putData(this.api.category + '/' + id, params)
  }
  deleteCategory(id) {
    return this.api.deleteData(this.api.category + '/' + id)
  }
}
