import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { GetWeatherService } from './services/search/search.service';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupService } from './services/signup/signup.service';
import { LoginService } from './services/login/login.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import {
  MatNativeDateModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from "@angular/material-moment-adapter";
import { CookieService } from 'ngx-cookie-service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,

   
  ],
  imports: [BrowserAnimationsModule,
    MatMomentDateModule ,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    RouterModule.forChild([
      { path: 'signup', component:SignupComponent},
      {path:'login', component:LoginComponent},
      {path: 'search', component:SearchComponent},
      {path:'', redirectTo: 'login', pathMatch: 'full'}
    ])
  ],
  providers: [SignupComponent,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    CookieService,
    LoginComponent,
    SignupService,
    LoginService,GetWeatherService],
  bootstrap: [AppComponent,
  
  ]
})
export class AppModule { }
