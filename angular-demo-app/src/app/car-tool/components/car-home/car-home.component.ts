import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Car, NewCar } from '../../models/cars';
import { CarsDataService } from '../../services/cars-data.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CarHomeComponent implements OnInit {

  headerText = "Car Tool";

  cars: Car[] = [];

  editCarId = -1;

  constructor(private carsData: CarsDataService) { }

  ngOnInit(): void {
    this.cars = this.carsData.all();
  }

  doAddCar(car: NewCar) {
    this.carsData.append(car);
    this.cars = this.carsData.all();
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    this.carsData.replace(car);
    this.cars = this.carsData.all();
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.carsData.remove(carId);
    this.cars = this.carsData.all();
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
