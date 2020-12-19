import { Component, OnInit } from '@angular/core';
import { PrimeService } from '../prime.service';
import { Mock2Service } from '../mock2.service';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers: [{provide: PrimeService, useClass: Mock2Service}],
})
export class OneComponent implements OnInit {


  constructor(private service: PrimeService) { }

  ngOnInit(): void {
    this.service.getMessage();
  }

}
