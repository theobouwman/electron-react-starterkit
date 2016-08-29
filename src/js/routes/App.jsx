import React from 'react';

export default class App extends React.Component  {
  render() {
    return (
      <div>
        <ul>
          <li>item</li>
          <li>item</li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
