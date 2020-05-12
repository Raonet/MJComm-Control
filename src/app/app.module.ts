import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NewsComponent } from './news/news.component';
import { UserComponent } from './user/user.component';
import { ForumComponent } from './forum/forum.component';
import { ChatComponent } from './chat/chat.component';
import { RepairComponent } from './repair/repair.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    UserComponent,
    ForumComponent,
    ChatComponent,
    RepairComponent,
    FeedbackComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
