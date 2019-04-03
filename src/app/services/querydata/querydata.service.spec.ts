import { TestBed } from '@angular/core/testing';

import { QuerydataService } from './querydata.service';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('QuerydataService', () => {
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
    const service: QuerydataService = TestBed.get(QuerydataService);
    expect(service).toBeTruthy();
  });
});
