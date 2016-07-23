/**
*
* Basis
*
*/

import React from 'react';

const Basis = ({
  x,
  y,
  r
}) => {
  return (
    <circle cx={ x }
            cy={ y }
            r={ r }
            stroke='#666'
            strokeWidth='1'
            fill='transparent' />
  );
};

export default Basis;
