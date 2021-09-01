import { useState } from 'react';

import { carsPropType } from "../proptypes/cars";

import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, addCar, saveCar, deleteCar ] =
    useList([ ...initialCars ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const appendCar = (car) => {
    addCar(car);
    setEditCarId(-1);
  };

  const replaceCar = (car) => {
    saveCar(car);
    setEditCarId(-1);
  };

  const removeCar = (carId) => {
    deleteCar(carId);
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