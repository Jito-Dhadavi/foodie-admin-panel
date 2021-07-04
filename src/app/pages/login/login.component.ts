import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  password='';
  isLoading = false;
  constructor(private router: Router,
    private restApiService: RestApiService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const params = {
      email: this.email,
      password: this.password
    }
    this.isLoading = true;
    this.restApiService.login(params).then(res => {
      this.isLoading = false;
        if (res && res.code===200) {
          const { data } = res;
          if (data.user.role === 'A') {
            localStorage.setItem('admin', JSON.stringify(data))
            this.router.navigateByUrl('/dashboard')
          }
        }else{

        }

    }).catch(err => {
      this.isLoading = false;
      console.log('err: ', err);
    })
  }
}
