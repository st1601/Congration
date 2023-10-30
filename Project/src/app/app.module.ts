import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/default/login/login.component';
import { RegisterComponent } from './components/default/register/register.component';
import { PasswordComponent } from './components/default/password/password.component';
import { SpaperComponent } from './components/customer/spaper/spaper.component';
import { FavoliteComponent } from './components/customer/favolite/favolite.component';
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
import { MusicaComponent } from './components/admin/musica/musica.component';
import { MusiccComponent } from './components/customer/musicc/musicc.component';
import { MusictComponent } from './components/actor/musict/musict.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileaComponent } from './components/admin/profilea/profilea.component';
import { ProfiletComponent } from './components/actor/profilet/profilet.component';
import { ProfilecComponent } from './components/customer/profilec/profilec.component';
import { SingleComponent } from './components/customer/single/single.component';
import { AsingleComponent } from './components/customer/asingle/asingle.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    SpaperComponent,
    FavoliteComponent,
    AccountComponent,
    PostComponent,
    MaintComponent,
    MainaComponent,
    MaincComponent,
    HomeComponent,
    NavbartComponent,
    NavbaraComponent,
    NavbarcComponent,
    MusicaComponent,
    MusiccComponent,
    MusictComponent,
    ProfileaComponent,
    ProfiletComponent,
    ProfilecComponent,
    SingleComponent,
    AsingleComponent
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
        path: 'maint',
        component: MaintComponent,
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
        component: MusicaComponent,
      },
      {
        path: 'musict',
        component: MusictComponent,
      },
      {
        path: 'musicc',
        component: MusiccComponent,
      },
      {
        path: 'adminp',
        component: ProfileaComponent,
      },
      {
        path: 'actort',
        component: ProfiletComponent,
      },
      {
        path: 'customerc',
        component: ProfilecComponent,
      },
      {
        path: 'post',
        component: PostComponent,
      },
      {
        path: 'paper',
        component: SpaperComponent,
      },
      {
        path: 'favolite',
        component: FavoliteComponent,
      },
      {
        path: 'single',
        component: SingleComponent,
      },
      {
        path: 'asong',
        component: AsingleComponent,
      },
    ]),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
