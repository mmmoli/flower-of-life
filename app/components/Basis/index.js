/**
*
* Basis
*
*/

import React from 'react';

import styles from './styles.css';

function Basis({
  x,
  y,
  r,
}) {
  return (
    <circle
      className={styles.basis}
      cx={x}
      cy={y}
      r={r}
    />
  );
}

Basis.propTypes = {
  r: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
};

export default Basis;
