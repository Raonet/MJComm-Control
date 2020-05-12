import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadChangeParam, UploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

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
  fileList: UploadFile[] = [];

  constructor( private http: HttpClient ) { }

  isVisible = false;

  title: string;

  content: string;

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
    let imgList;
    await this.http.get('api/homepage/homeimg').toPromise()
    .then(res => { imgList = res; console.log(imgList); });
    this.data = imgList;
  }

  async del(item) {
    console.log(item);
    await this.http.post('api/homepage/delhomeimg', item).toPromise()
    .then(res => {  });
    this.getnewslist();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  handleChange(info: UploadChangeParam): void {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.fileList = fileList;
    this.getnewslist();
  }
}
