/**
*
* Lattice
*
*/

import React from 'react';
import generate from '../../lib/lattice';
import { a, b } from '../../lib/lattice/vectors';
import Basis from '../Basis';

const Lattice = ({
  r = 40,
  l = 3,
}) => {
  const offsetX = r;
  const offsetY = (r / 2) * (l + 1);

  const points = generate(l);

  const xMax = a(2 * l - 2, r) + (2 * r);

  const yMax = (l * r * 2);

  const padding = 10;

  return (
    <svg
      width={yMax}
      height={yMax}
      viewBox={`${-padding} ${-padding} ${xMax + 2 * padding} ${yMax + 2 * padding}`}
      preserveAspectRatio="xMidYMid meet"
    >

      {points.map(([i, j], key) => {
        const x = a(i, r) + offsetX;
        const y = b(i, j, r) + offsetY;
        return (
          <Basis
            key={key}
            x={x}
            y={y}
            r={r}
          />
        );
      })}
    </svg>
  );
};

Lattice.propTypes = {
  r: React.PropTypes.number,
  l: React.PropTypes.number,
};

export default Lattice;
