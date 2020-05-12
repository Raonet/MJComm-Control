import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


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

  searchData = [];

  ngOnInit(): void {
    this.getnewslist();
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

  async getnewslist() {
    let newslist;
    await this.http.get('api/news/getnews').toPromise()
    .then(res => { newslist = res; });
    this.data = newslist;
    this.searchData = newslist;
  }

  async del(item) {
    await this.http.post('api/news/delnews', item).toPromise()
    .then(res => {  });
    this.getnewslist();
  }

  showModal(): void {
    this.isVisible = true;
  }

  async handleOk() {
    await this.http.post('api/news/addnews', {title: this.title, content: this.content, createtime: new Date()}).toPromise()
    .then( res => {  } );
    this.isVisible = false;
    this.getnewslist();
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  searchNew(value) {
    if (value === '') {
      return ;
    }
    const result = [];
    for (const index in this.searchData) {
      if (this.searchData[index].title.indexOf(value) !== -1) {
        result.push(this.searchData[index]);
      }
    }
    this.data = result;
  }
}
