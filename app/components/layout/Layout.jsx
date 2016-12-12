'use strict';
import React from 'react';
import styles from './layout.less'
import { render } from 'react-dom';
import * as _ from 'lodash';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="header"><h2>Header</h2></div>
        <div className="main">
          {this.props.children}
        </div>
        <div className="footer"><h2>Footer</h2></div>
      </div>
    )
  }
}
