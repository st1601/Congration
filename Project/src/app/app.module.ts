import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/default/login/login.component';
import { RegisterComponent } from './components/default/register/register.component';
import { PasswordComponent } from './components/default/password/password.component';
import { SpaperComponent } from './components/customer/spaper/spaper.component';
import { MusicComponent } from './components/customer/music/music.component';
import { VideoComponent } from './components/customer/video/video.component';
import { FavoliteComponent } from './components/customer/favolite/favolite.component';
import { TopComponent } from './components/customer/top/top.component';
import { ProfileComponent } from './components/customer/profile/profile.component';
import { AccountComponent } from './components/admin/account/account.component';
import { PostComponent } from './components/actor/post/post.component';
import { MaintComponent } from './components/actor/maint/maint.component';
import { MainaComponent } from './components/admin/maina/maina.component';
import { MaincComponent } from './components/customer/mainc/mainc.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbartComponent } from './components/actor/navbart/navbart.component';
import { NavbaraComponent } from './components/admin/navbara/navbara.component';
import { NavbarcComponent } from './components/customer/navbarc/navbarc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    SpaperComponent,
    MusicComponent,
    VideoComponent,
    FavoliteComponent,
    TopComponent,
    ProfileComponent,
    AccountComponent,
    PostComponent,
    MaintComponent,
    MainaComponent,
    MaincComponent,
    HomeComponent,
    NavbartComponent,
    NavbaraComponent,
    NavbarcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'mainc',
        component: MaincComponent,
      },
      {
        path: 'maina',
        component: MainaComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'reset',
        component: PasswordComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'customer',
        component: MaincComponent,
      },
      {
        path: 'admin',
        component: MainaComponent,
      },
      {
        path: 'actor',
        component: MaintComponent,
      },
      {
        path: 'user',
        component: AccountComponent,
      },
      {
        path: 'musica',
        component: MusicComponent,
      },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
