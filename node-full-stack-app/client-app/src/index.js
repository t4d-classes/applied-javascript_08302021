import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000'},
  { id: 2, name: 'green', hexcode: '00ff00'},
  { id: 3, name: 'blue', hexcode: '0000ff'},
];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 110000 },
];



render(<>
  <ColorTool colors={colorList} />
  <CarTool cars={carList} />
</>, document.querySelector("#root"));