import { TestBed } from '@angular/core/testing';

import { SavedataService } from './savedata.service';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('SavedataService', () => {
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

]
  }));

  it('should be created', () => {
    const service: SavedataService = TestBed.get(SavedataService);
    expect(service).toBeTruthy();
  });
});
