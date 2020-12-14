import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mock2Service {

  constructor() { }

  getMessage(): void {
    console.log('Mock 2 service');
  }
}
