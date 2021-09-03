import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Car, NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CarHomeComponent implements OnInit {

  headerText = "Car Tool";

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 110000 },
  ];

  editCarId = -1;

  ngOnInit(): void {
  }

  doAddCar(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      }
    ];
    this.editCarId = -1;

  }

  doSaveCar(car: Car) {
    const newCars = [ ...this.cars ];
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = {
      ...newCars[carIndex],
      ...car,
    };
    this.cars = newCars;
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
