import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = []
  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.restApiService.getUsers().then(res => {
      if (res && res.code === 200) {
        this.users = res.data
      }
    }).catch(err => {
      console.log('error is', err);
    })
  }
}
