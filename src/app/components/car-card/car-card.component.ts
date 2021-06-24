import { Component, OnInit, Input } from '@angular/core';
import { ICar } from './../../interfaces/car/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() car: ICar;

  constructor() { }

  ngOnInit(): void {
  }

}
