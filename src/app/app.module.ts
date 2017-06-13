import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './body/home.component';
import { AboutComponent } from './body/about.component';
import { ContactComponent } from './body/contact.component';
import { RegisterComponent } from './register/register.component';
import { AddroomComponent } from './body/addroom.component';
import { LoginComponent } from './login/login.component';
import { GetroomsComponent } from './body/getrooms.component';
import { FooterComponent } from './footer/footer.component';
import { DeleteroomComponent } from './body/deleteroom.component';
import { UpdateroomComponent } from './body/updateroom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    AddroomComponent,
    LoginComponent,
    GetroomsComponent,
    FooterComponent,
    DeleteroomComponent,
    UpdateroomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
