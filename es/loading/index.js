import { a as styleInject } from '../chunk-80bd9449.js';
import React from 'react';
import PropTypes from 'prop-types';

var css = ".style_dv-loading__1Un5F {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.style_dv-loading__1Un5F .style_loading-tip__1AFth {\n  font-size: 15px;\n}\n";
styleInject(css);

var Loading = function Loading(_ref) {
  var children = _ref.children;

  return React.createElement(
    'div',
    { className: 'dv-loading' },
    React.createElement(
      'svg',
      { width: '50px', height: '50px' },
      React.createElement(
        'circle',
        {
          cx: '25',
          cy: '25',
          r: '20',
          fill: 'transparent',
          strokeWidth: '3',
          strokeDasharray: '31.415, 31.415',
          stroke: '#02bcfe',
          strokeLinecap: 'round'
        },
        React.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0, 25 25;360, 25 25',
          dur: '1.5s',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'stroke',
          values: '#02bcfe;#3be6cb;#02bcfe',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      ),
      React.createElement(
        'circle',
        {
          cx: '25',
          cy: '25',
          r: '10',
          fill: 'transparent',
          strokeWidth: '3',
          strokeDasharray: '15.7, 15.7',
          stroke: '#3be6cb',
          strokeLinecap: 'round'
        },
        React.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '360, 25 25;0, 25 25',
          dur: '1.5s',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'stroke',
          values: '#3be6cb;#02bcfe;#3be6cb',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'loading-tip' },
      children
    )
  );
};

Loading.propTypes = {
  children: PropTypes.node
};

export default Loading;
//# sourceMappingURL=index.js.map
