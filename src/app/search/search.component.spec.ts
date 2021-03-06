import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {SearchresultsComponent} from '../searchresults/searchresults.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {DisplaydataComponent} from '../displaydata/displaydata.component'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {  HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBarModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {
    MatNativeDateModule
  } from '@angular/material';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, NavbarComponent,SearchresultsComponent, DisplaydataComponent],
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
        RouterModule.forChild([
            {path: 'data', component:DisplaydataComponent},

          ]),
    ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('locate function should exist', () => {
    expect(component.locate).toBeTruthy();
  });
});
