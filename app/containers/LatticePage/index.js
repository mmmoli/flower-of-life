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
      <Lattice l={5} />
    </div>
  );
}

export default LatticePage;
