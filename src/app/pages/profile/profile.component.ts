import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  admin;
  constructor() {
    const { user } = JSON.parse(localStorage.getItem('admin'))
    this.admin = user
    console.log('this.admin: ', this.admin);
  }

  ngOnInit(): void {
  }

  onUpdate(){
    console.log('admin is',this.admin);
    
  }

}
