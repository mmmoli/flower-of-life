/**
*
* Basis
*
*/

import React from 'react';

function Basis({
  x,
  y,
  r,
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      stroke="#666"
      strokeWidth="1"
      fill="transparent"
    />
  );
}

Basis.propTypes = {
  r: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
};

export default Basis;
