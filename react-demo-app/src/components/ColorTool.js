import { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([...props.colors]);
  const [ colorForm, setColorForm ] = useState({ name: '', hexcode: '' });

  const change = (e) => {
    setColorForm({
      ...colorForm, // copy the properties from the orignal color form in to the new one
      [ e.target.name ]: e.target.value,
    });
  };

  const addColor = () => {
    setColors([
      ...colors,
      {
        ...colorForm,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      }
    ]);
  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <label style={{display:'block'}}>
          Color Name:
          <input type="text" name="name" value={colorForm.name} onChange={change} />
        </label>
        <label style={{display:'block'}}>
          Color Hexcode:
          <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </label>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};