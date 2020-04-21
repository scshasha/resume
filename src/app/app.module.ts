import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './shared/_components/header/header.component';
import { FooterComponent } from './shared/_components/footer/footer.component';
import { RegisterComponent } from './shared/_components/register/register.component';
import { RequestResetComponent } from './shared/_components/password/request-reset/request-reset.component';
import { ResetResponseComponent } from './shared/_components/password/reset-response/reset-response.component';
import { LoginComponent } from './shared/_components/login/login.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    WelcomeComponent,
    SkillsComponent,
    SkillComponent,
    WorkComponent,
    FooterComponent,
    ContactComponent,
    PolicyComponent,
    FourohfourComponent,
    LoginComponent,
    ComingsoonComponent,
    DashboardComponent,
    RegisterComponent,
    RequestResetComponent,
    ResetResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
