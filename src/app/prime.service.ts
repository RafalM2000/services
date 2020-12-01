import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {

  constructor() { }

  getMessage(): void {
    console.log('Prime service');
  }
}
