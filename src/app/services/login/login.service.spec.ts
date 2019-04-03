import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import {  HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ RouterModule, CookieService],
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        RouterTestingModule,
        MatButtonModule,
        MatSnackBarModule,
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
        MatToolbarModule,
  ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
