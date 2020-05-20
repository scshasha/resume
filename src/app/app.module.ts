import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ComingsoonComponent } from './shared/components/comingsoon/comingsoon.component';
import { PolicyComponent } from './modules/pages/policy/policy.component';
import { FourohfourComponent } from './shared/components/fourohfour/fourohfour.component';
import {ResumeModule} from './modules/resume/resume.module';
import {DefaultModule} from './layouts/default/default.module';
import {MaterialModule} from './shared/modules/material.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PolicyComponent,
        FourohfourComponent,
        ComingsoonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SnotifyModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        MaterialModule,
        ResumeModule,
        DefaultModule
    ],
    providers: [
        Title,
        {
            provide: 'SnotifyToastConfig',
            useValue: ToastDefaults
        },
        SnotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
