/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export function NotFound(props) {
  return (
    <article>
      <h1>Page not found.</h1>
    </article>
  );
}

export default NotFound;
