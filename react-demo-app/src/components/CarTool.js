import { useState } from 'react';

import { carsPropType } from "../proptypes/cars";

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState([ ...initialCars ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const appendCar = (car) => {

    setCars([
      ...cars,
      {
        ...car, id: Math.max(...cars.map(c => c.id), 0) + 1,
      }
    ]);
    setEditCarId(-1);

  };

  const replaceCar = (car) => {
    const newCars = [...cars];
    const carIndex = cars.findIndex(c => c.id === car.id);
    // newCars[carIndex] = car;
    newCars[carIndex] = {
      ...newCars[carIndex],
      ...car
    };
    setCars(newCars);
    setEditCarId(-1);
  };

  const removeCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={removeCar}
        onSaveCar={replaceCar} onCancelCar={cancelCar}  />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType,
};