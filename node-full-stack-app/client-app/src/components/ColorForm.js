import { useForm } from '../hooks/useForm';


export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, change, resetColorForm ] = useForm({ name: '', hexcode: '' });

  const submitColor = () => {
    onSubmitColor({ ...colorForm }); // invoke addColor
    resetColorForm();
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