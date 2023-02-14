import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { DetailFormComponent } from './Components/detail-form/detail-form.component';
import { LoginComponent } from './Components/login/login.component';
import { OtpComponent } from './Components/otp/otp.component';
import { ConfirmRequestComponent } from './Components/confirm-request/confirm-request.component';
import { NewRequestComponent } from './Components/new-request/new-request.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FirstpageComponent } from './Components/firstpage/firstpage.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { MyrequestComponent } from './Components/myrequest/myrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    DetailFormComponent,
    LoginComponent,
    OtpComponent,
    ConfirmRequestComponent,
    NewRequestComponent,
    ProfileComponent,
    FirstpageComponent,
    MyrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
