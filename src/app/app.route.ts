import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { TabletaskComponent } from './tabletask/tabletask.component';
import {SocialsignupComponent} from './socialsignup/socialsignup.component'
import { MaterialtableComponent } from "./materialtable/materialtable.component";

export const appRoutes: Routes = [
    
     { path: '', component: LoginComponent },
     { path: 'Home', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'socialsignup', component: SocialsignupComponent },
     { path: 'tabletask', component: TabletaskComponent },
     { path: 'materialtable', component: MaterialtableComponent },
     { path: '',redirectTo: 'Home', pathMatch: 'full' },
     { path: 'signup', component: SignupComponent },
    ];