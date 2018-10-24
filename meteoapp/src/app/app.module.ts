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
import { MatMomentDateModule } from "@angular/material-moment-adapter";
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
    LoginComponent,
    SignupService,
    LoginService],
  bootstrap: [AppComponent,
  
  ]
})
export class AppModule { }
