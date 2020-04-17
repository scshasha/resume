import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AppComponent} from './app.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about-me', component: AboutUsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: PolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
