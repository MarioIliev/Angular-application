import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { Youtube } from './pipes/youtube';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SpecialEventsDetailComponent } from './special-events-detail/special-events-detail.component';
import { CreateSpecialEventComponent } from './create-special-event/create-special-event.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsService } from './news.service';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { DomainService } from './domain.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    HomeComponent,
    FooterComponent,
    NewsComponent,
    EventDetailsComponent,
    Youtube,
    SpecialEventsDetailComponent,
    CreateSpecialEventComponent,
    CreateNewsComponent,
    NewsDetailsComponent,
    ConfirmEqualValidatorDirective,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [AuthService, AuthGuard, EventService, NewsService, DomainService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
