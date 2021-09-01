import { useState } from 'react';

import { colorsPropType } from '../proptypes/colors';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { ToolFooter } from './ToolFooter';


export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([...props.colors]);

  const addColor = (newColor) => {
    setColors([
      ...colors,
      {
        ...newColor,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      }
    ]);
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color"
        onSubmitColor={addColor} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType,
};