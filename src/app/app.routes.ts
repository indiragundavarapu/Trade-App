import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeFormComponent } from './trade-form/trade-form.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path:'login', component: LoginComponent },
    { path:'signup', component: SignupComponent },
    { path:'dashboard', component: DashboardComponent },
    { path:'tradeForm', component: TradeFormComponent },

];
