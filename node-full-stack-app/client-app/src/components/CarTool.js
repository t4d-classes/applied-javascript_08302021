import { useState, useEffect } from 'react';

import { carsPropType } from "../proptypes/cars";

import { useApi } from '../hooks/useApi';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, refreshCars, addCar, saveCar, deleteCar ] =
    useApi("/api/carsmongo");

  const [ editCarId, setEditCarId ] = useState(-1);

  useEffect(() => {

    refreshCars();

  }, [refreshCars])

  const appendCar = async (car) => {
    await addCar(car);
    setEditCarId(-1);
  };

  const replaceCar = async (car) => {
    await saveCar(car);
    setEditCarId(-1);
  };

  const removeCar = async (carId) => {
    await deleteCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  const editCar = (carId) => {
    console.log(carId);
    setEditCarId(carId);
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={removeCar}
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