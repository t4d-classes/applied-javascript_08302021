import { render } from 'react-dom';

import { HelloWorld } from './components/HelloWorld';


// return React.createElement(HelloWorld)

render(<HelloWorld />, document.querySelector("#root"));