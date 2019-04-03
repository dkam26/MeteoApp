import { TestBed } from '@angular/core/testing';

import { GetWeatherService } from './search.service';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplaydataComponent } from 'src/app/displaydata/displaydata.component';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ RouterModule, CookieService],
    declarations: [ DisplaydataComponent],
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
  }));

  it('should be created', () => {
    const service: GetWeatherService = TestBed.get(GetWeatherService);
    expect(service).toBeTruthy();
  });
});
