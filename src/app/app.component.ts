import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  passwordVisible = false;
  password: string;
  username: string;
  isLogin = false;

  constructor(private http: HttpClient) {}
  login() {
    this.http.post('api/admin/login', {username: this.username, password: this.password}).toPromise()
    .then(res => {
      // tslint:disable-next-line: triple-equals
      if (res == 0) {
        alert('帐号或密码错误，请重试');
      } else {
        this.isLogin = true;
      }
     });
  }
}
