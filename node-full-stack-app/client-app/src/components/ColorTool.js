import { useState } from 'react';

import { colorsPropType } from '../proptypes/colors';

import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { ToolFooter } from './ToolFooter';


export const ColorTool = (props) => {

  const [ colors, addColor ] = useList([...props.colors]);

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