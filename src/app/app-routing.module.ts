import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AuthGuard } from './auth.guard';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SpecialEventsDetailComponent } from './special-events-detail/special-events-detail.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { CreateSpecialEventComponent } from './create-special-event/create-special-event.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:_id', component: EventDetailsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'create-news', component: CreateNewsComponent },
  { path: 'news/:_id', component: NewsDetailsComponent },
  { path: 'special', canActivate: [AuthGuard], component: SpecialEventsComponent },
  { path: 'special/:_id', component: SpecialEventsDetailComponent },
  { path: 'create-special-event', component: CreateSpecialEventComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
