import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/_components/header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { WorkComponent } from './work/work.component';

import { FooterComponent } from './shared/_components/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';
import { AlertComponent } from './shared/_components/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';

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
    AlertComponent,
    LoginComponent,
    ComingsoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
