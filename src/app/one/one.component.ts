import { Component, OnInit } from '@angular/core';
import { PrimeService } from '../prime.service';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {


  constructor(private service: PrimeService) { }

  ngOnInit(): void {
    this.service.getMessage();
  }

}
