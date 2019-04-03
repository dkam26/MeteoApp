import { TestBed } from '@angular/core/testing';
import { SignupService } from './signup.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SignupComponent } from 'src/app/signup/signup.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ SignupComponent ],
    providers: [ SignupService ],
    imports: [
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      FormsModule,
      HttpClientModule,
      RouterTestingModule,
      MatSnackBarModule,
      BrowserAnimationsModule,
  ],
  }));
  it('should be created', () => {

        const service: SignupService = TestBed.get(SignupService);
        expect(service).toBeTruthy();
      });
});
