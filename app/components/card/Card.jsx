'use strict';

import React from 'react';
import * as _ from 'lodash';
import { PropTypes } from 'react';
import styles from './card.less';

export default class Card extends React.Component {

  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.number,
    hover: PropTypes.hover,
  };

  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  handleMouseEnter() {
    this.setState({
      hover: true
    })
  }

  handleMouseLeave() {
    this.setState({
      hover: false
    })
  }

  render() {
    const otherProps = _.omit(this.props, ['type', 'title', 'text', 'value']);
    return (
      <div className={`card ${this.state.hover ? 'hover' : ''}`}
           onMouseEnter={this.handleMouseEnter.bind(this)}
           onMouseLeave={this.handleMouseLeave.bind(this)}
           {...otherProps}
      >
        <div className="inner">
          <div className="header">
            <div className="value hexagon">{this.props.value}</div>
            <div className={`type ${this.props.type}`}>
              {this.props.type}
            </div>
          </div>

          <div className="title">
            {this.props.title}
          </div>

          <div className="content">
            <div className="text">
              {this.props.text}
            </div>
          </div>

        </div>
      </div>
    )
  }
}
