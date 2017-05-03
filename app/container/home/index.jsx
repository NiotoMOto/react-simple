'use strict';

import React from 'react';
import Card from '../../components/card/Card.jsx'
import Layout from '../../components/layout/Layout.jsx';
import styles from './home.less';
import skills from '../../data/skills.js';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
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
