import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {


  loading = false;
  data = [
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

  constructor( private http: HttpClient ) { }

  isVisible = false;

  title: string;

  content: string;

  ngOnInit(): void {
    this.getforumlist();
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

  async getforumlist() {
    let forumlist;
    await this.http.get('api/forum/getall').toPromise()
    .then(res => { forumlist = res; });
    this.data = forumlist;
  }

  async del(item) {
    await this.http.post('api/forum/delforum', item).toPromise()
    .then(res => {  });
    this.getforumlist();
  }
}
