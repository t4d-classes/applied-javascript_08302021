import { Injectable } from '@angular/core';

import { Car, NewCar } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  private cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 110000 },
  ];

  constructor() { }

  public all(): Car[] {
    return [
      ...this.cars
    ];
  }

  append(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      }
    ];
  }

  replace(car: Car) {
    const newCars = [ ...this.cars ];
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = {
      ...newCars[carIndex],
      ...car,
    };
    this.cars = newCars;
  }

  remove(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
  }
}
