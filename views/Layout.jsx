import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Layout extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.props.custom.title);
  }

  render() {
    const { custom } = this.props;
    return (
      <html>
        <head>
          <title>{custom.title}</title>
          <link rel='stylesheet' href='/style.css'/>
        </head>
        <body>
          <h1>{custom.title}</h1>
          <p>Build something great!</p>
          <button onClick={this.handleClick}>Click Me</button>

          {this.props.children}

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>

          </ul>

          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(custom)
          }}/>
          <script src='/bundle.js'/>
        </body>
      </html>
    );
  }
}

const wrapper = connect(
  (state) => {
    return { custom: state };
  }
);

export default wrapper(Layout);