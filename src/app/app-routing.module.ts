import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmRequestComponent } from './Components/confirm-request/confirm-request.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DetailFormComponent } from './Components/detail-form/detail-form.component';
import { FirstpageComponent } from './Components/firstpage/firstpage.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { NewRequestComponent } from './Components/new-request/new-request.component';
import { OtpComponent } from './Components/otp/otp.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'sidebar',component:SidebarComponent
  },
  {
    path:'detail-form',component:DetailFormComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'otp',component:OtpComponent
  },
  {
    path:'new',component:NewRequestComponent
  },
  {
    path:'confirm',component:ConfirmRequestComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'firstpage',component:FirstpageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
