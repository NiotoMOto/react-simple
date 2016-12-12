'use strict';

import React from 'react';
import Card from '../../components/card/Card.jsx'
import Layout from '../../components/Layout/Layout.jsx';
import styles from './home.less';
import skills from '../../data/skills.js';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.initAngle = -(skills.length * 6);
  }

  handleHover() {
    console.log('handleHover');
  }

  render() {
    return (
      <Layout>
        <div className="home">
          <div className="hand">
            {skills.map(((skill, k) => (
              <Card
                index={k}
                style={
                  {
                    transform: `translate(-1.3em, .6em) rotate(${this.initAngle + (k*12)}deg)`,
                    marginLeft: `${k*40}px`,
                  }
                }
                hover={this.handleHover}
                value={skill.value}
                type={skill.type}
                title={skill.title}
                text={skill.text}>
              </Card>
            )))}
          </div>
        </div>
      </Layout>
    )
  }
}
