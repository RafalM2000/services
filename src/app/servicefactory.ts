import { MockService } from './mock.service';
import { PrimeService } from './prime.service';
import { Mock2Service } from './mock2.service';

export function serviceFactory(service: number): object {
  switch (service) {
    case 1:
    return new PrimeService();
    case 2:
    return new MockService();
    case 3:
    return new Mock2Service();
    default:
    return new PrimeService();
  }
}
