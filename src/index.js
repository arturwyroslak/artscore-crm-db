import React from 'react';
import { render } from 'react-dom';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom'

class Example extends React.Component {
  render() {
    return (
      <ReactSVGPanZoom
        width={300} height={300}
        onClick={event => console.log(event.x, event.y, event.originalEvent)}>

        <svg width={617} height={316}>
          <g>
            <rect x="400" y="40" width="100" height="200" fill="#4286f4" stroke="#f4f142" />
            <circle cx="108" cy="108.5" r="100" fill="#0ff" stroke="#0ff" />
            <circle cx="180" cy="209.5" r="100" fill="#ff0" stroke="#ff0" />
            <circle cx="220" cy="109.5" r="100" fill="#f0f" stroke="#f0f" />
          </g>
        </svg>
      </ReactSVGPanZoom>
    );
  }
}

const App = () => (
    <Example />
);

render(<App />, document.getElementById('root'));
