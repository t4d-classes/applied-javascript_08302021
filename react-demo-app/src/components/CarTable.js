import PropTypes from 'prop-types';

import { carsPropType } from '../proptypes/cars';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = ({ cars, editCarId, onEditCar, onDeleteCar }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => car.id === editCarId
          ? <CarEditRow key={car.id} car={car} />
          : <CarViewRow
            key={car.id} car={car} onEditCar={onEditCar} onDeleteCar={onDeleteCar} />)}
      </tbody>
    </table>    
  );


};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: carsPropType,
  onDeleteCar: PropTypes.func.isRequired,
};