import { ResetResponseComponent } from './shared/_components/password/reset-response/reset-response.component';
import { RegisterComponent } from './shared/_components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyComponent } from './pages/policy/policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FourohfourComponent } from './pages/fourohfour/fourohfour.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { DashboardComponent} from './admin/dashboard/dashboard.component';
import { LoginComponent } from './shared/_components/login/login.component';
import { RequestResetComponent } from './shared/_components/password/request-reset/request-reset.component';
import { UnauthGuardService} from './shared/_services/unauth-guard.service';
import { AuthGuardService } from './shared/_services/auth-guard.service';

const routes: Routes = [

  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about-me', component: AboutUsComponent },
  { path: 'my-work', component: WorkComponent },
  { path: 'my-skills', component: SkillsComponent },
  { path: 'contact-me', component: ContactComponent },
  { path: 'coming-soon', component: ComingsoonComponent },
  { path: 'page-not-found', component: FourohfourComponent },
  {
    path: 'xyz',
    loadChildren: 'app/admin-dashboard/admin-dashboard.module#AdminDashboardModule'
  }

  /** Restricted routes. */
  { path: 'user/login', component: LoginComponent, canActivate: [UnauthGuardService] },
  { path: 'user/new', component: RegisterComponent, canActivate: [UnauthGuardService] },
  { path: 'reset/request', component: RequestResetComponent, canActivate: [UnauthGuardService] },
  { path: 'reset/response', component: ResetResponseComponent, canActivate: [UnauthGuardService] },
  { path: 'administrator', component: DashboardComponent, canActivate: [AuthGuardService] },

  /** Redirects */
  { path: 'terms-and-dislosures', redirectTo: '/coming-soon', pathMatch: 'full' },

  /** otherwise redirect to 404 */
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
