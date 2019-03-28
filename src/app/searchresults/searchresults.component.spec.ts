import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultsComponent } from './searchresults.component';

import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
} from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

describe('SearchresultsComponent', () => {
  let component: SearchresultsComponent;
  let fixture: ComponentFixture<SearchresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultsComponent ],
      providers: [CookieService],
      imports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        HttpClientModule,
        MatListModule,
        RouterTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
