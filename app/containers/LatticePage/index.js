/*
 *
 * LatticePage
 *
 */

import React from 'react';
import Lattice from 'components/Lattice';

import styles from './styles.css';

function LatticePage() {
  return (
    <div className={styles.latticePage}>
      <h1>Lattice</h1>
      <Lattice l={5} />
    </div>
  );
}

export default LatticePage;
