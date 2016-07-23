/**
*
* Lattice
*
*/

import React from 'react';
import generate from '../../lib/lattice';
import { a, b } from '../../lib/lattice/vectors';
import Basis from '../Basis';

import styles from './styles.css';

const Lattice = ({
  r = 40,
  l = 3
}) => {
  const offsetX = r;
  const offsetY = (r/2) * (l + 1);

  const points = generate(l);


  const xMax = a(2 * l - 2, r) + (2 * r) + 2;
  const yMax = l * r * 2;

  return (
    <svg width={ xMax }
         height={ yMax }
         viewBox={`0 0 ${xMax} ${yMax}`}
         preserveAspectRatio='xMidYMid meet'
         className={ styles.lattice }>
      {points.map(([i, j], key) => {
        const x = a(i, r) + offsetX;
        const y = b(i, j, r) + offsetY;
        return (
          <Basis key={ key }
                 x={ x }
                 y={ y }
                 r={ r } />
        );
      })}
    </svg>
  );
};

export default Lattice;
