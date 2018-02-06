import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './app.route';

//Components/Services imports
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DbconnectService } from './dbconnect.service';
import { ChartComponent } from './chart/chart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { TabletaskComponent } from './tabletask/tabletask.component';
import { MaterialtableComponent } from './materialtable/materialtable.component';
import { SignupComponent } from './signup/signup.component';
import { SocialsignupComponent } from './socialsignup/socialsignup.component';

//Modules imports
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

//ng4-social-login imports
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';

//Angulr Material Imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('gmail_key')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('facebook_key')
  },
]);

export function provideConfig() {
  return CONFIG;
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChartComponent,
    BarchartComponent,
    DoughnutComponent,
    MultiselectComponent,
MaterialtableComponent,
    TabletaskComponent,
    SignupComponent,
    SocialsignupComponent,


  ],
  imports: [
    BrowserModule,
    
    HttpModule,
 
    ChartsModule,
    Ng2SmartTableModule,
    MultiselectDropdownModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes),
    
   
  ],
  providers: [DbconnectService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],

  bootstrap: [AppComponent],

})
export class AppModule { }
