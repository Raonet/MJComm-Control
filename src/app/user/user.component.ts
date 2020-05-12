import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  loading = false;
  data: any = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
  search;

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.getUserlist();
  }

  change(): void {
    this.loading = true;
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1'
          },
          {
            title: 'Ant Design Title 2'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 4'
          }
        ];
        this.loading = false;
      }, 1000);
    }
  }

  async getUserlist() {
    let userlist;
    await this.http.get('api/user/getalluser').toPromise()
    .then(res => { userlist = res; });
    this.data = userlist.result;
  }

  del(item) {
    this.http.post('api/user/del', item).toPromise()
    .then( res => {console.log(res); });
    this.getUserlist();
  }

  searchUser() {
    for (const index in this.data) {
      if ( this.data[index] === this.search) {
        this.data = [this.data[index]];
      } else {
        this.getUserlist();
      }
    }
  }
}
