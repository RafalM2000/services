import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';

import { MockService } from './mock.service';
import { PrimeService } from './prime.service';
import { Mock2Service } from './mock2.service';
import { serviceFactory} from './servicefactory';
import { whichService } from './serviceCalculation';

export const appRouter: Routes = [
  {path: '', component: OneComponent},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: '**', component: OneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [{provide: PrimeService, useClass: PrimeService}],

  bootstrap: [AppComponent]
})
export class AppModule { }
