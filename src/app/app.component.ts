import { Component } from '@angular/core';
import { PrimeService } from './prime.service';
import { MockService } from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: PrimeService, useClass: MockService}],
})
export class AppComponent {
  title1 = 'Angular-In-Examples';
  title2 = 'Usługi - services';
}
