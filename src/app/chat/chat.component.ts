import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

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
    this.getchatlist();
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

  async getchatlist() {
    let chatlist;
    await this.http.get('api/chatroom', {}).toPromise()
    .then(res => { chatlist = res; });
    this.data = chatlist;
  }

  async del(item) {
    await this.http.post('api/chatroom/delchatroom', item).toPromise()
    .then(res => {  });
    this.getchatlist();
  }

  showModal(): void {
    this.isVisible = true;
  }

  async handleOk() {
    await this.http.post('api/chatroom/addchatroom', {name: this.title, description: this.content}).toPromise()
    .then( res => {  } );
    this.isVisible = false;
    this.getchatlist();
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
