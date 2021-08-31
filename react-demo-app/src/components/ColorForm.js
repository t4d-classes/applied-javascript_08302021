import { useState } from 'react';


export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, setColorForm ] = useState({ name: '', hexcode: '' });

  const change = (e) => {
    setColorForm({
      ...colorForm, // copy the properties from the orignal color form in to the new one
      [ e.target.name ]: e.target.value,
    });
  };

  const submitColor = () => {
    onSubmitColor({ ...colorForm }); // invoke addColor
  };

  return (
    <form>
      <label style={{display:'block'}}>
        Color Name:
        <input type="text" name="name"
          value={colorForm.name} onChange={change} />
      </label>
      <label style={{display:'block'}}>
        Color Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>    
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};