import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AppComponent} from './app.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FourohfourComponent} from './pages/fourohfour/fourohfour.component';
import {ComingsoonComponent} from './pages/comingsoon/comingsoon.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [

  // Current/Active Routes
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about-me', component: AboutUsComponent },
  { path: 'my-work', component: WorkComponent },
  { path: 'my-skills', component: SkillsComponent },
  { path: 'contact-me', component: ContactComponent },
  { path: 'coming-soon', component: ComingsoonComponent },
  { path: 'page-not-found', component: FourohfourComponent },
  { path: 'sign-in', component: LoginComponent },

  // Redirect Routes
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'terms-and-dislosures', redirectTo: '/coming-soon', pathMatch: 'full' },



  // otherwise redirect to 404
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
