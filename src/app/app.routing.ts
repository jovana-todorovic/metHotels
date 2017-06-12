import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './body/home.component';
import { AboutComponent } from './body/about.component';
import { ContactComponent } from './body/contact.component';
import { RegisterComponent } from './register/register.component';
import { AddroomComponent } from './body/addroom.component';
import { LoginComponent } from './login/login.component';
import { GetroomsComponent } from './body/getrooms.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'addroom', component: AddroomComponent},
    { path: 'login', component: LoginComponent},
    { path: 'getrooms', component: GetroomsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
