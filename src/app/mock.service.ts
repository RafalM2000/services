import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getMessage(): void {
    console.log('Mock service');
  }
}
