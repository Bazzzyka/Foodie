import React, { PureComponent } from 'react';
import Restaurants from './restaurants';
import Basket from './basket';
// import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    // return <Restaurants restaurants={this.props.restaurants} />;
    return <div className="row">
    <div className="column">
      <Restaurants restaurants={this.props.restaurants} />
    </div>
    <Basket className="column" />
  </div>
  }
}
