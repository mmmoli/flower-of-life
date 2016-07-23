/*
 *
 * LatticePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';


import styles from './styles.css';

class LatticePage extends React.Component {
  render() {
    return (
      <div className={ styles.latticePage }>
        <h1>Lattice</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LatticePage);
