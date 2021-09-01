import { useState } from 'react';
import PropTypes from 'prop-types';

import './CarForm.css';

const emptyCarForm = () => ({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [ carForm, setCarForm ] = useState(emptyCarForm());

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    });
  };

  const submitCar = () => {
    onSubmitCar({ ...carForm });

    setCarForm(emptyCarForm())
  };

  return (
    <form>
      <label>
        Make:
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="text" name="price"
          value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>    
  );

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};