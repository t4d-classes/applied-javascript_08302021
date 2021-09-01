import { colorsPropType } from '../proptypes/colors';

export const ColorList = ({ colors }) => {

  return (
    <ul>
      {colors.map(color => <li key={color.id}>{color.name} {color.hexcode}</li>)}
    </ul>
  );

};

ColorList.defaultProps = {
  colors: [],
};

ColorList.propTypes = {
  colors: colorsPropType,
};