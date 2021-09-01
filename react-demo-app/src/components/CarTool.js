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
    ])

  };

  const removeCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={removeCar}  />
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