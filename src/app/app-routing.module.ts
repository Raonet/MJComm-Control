import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { ChatComponent } from './chat/chat.component';
import { RepairComponent } from './repair/repair.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  { path: 'user', component: UserComponent},
  { path: 'news', component: NewsComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'repair', component: RepairComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'homepage', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
