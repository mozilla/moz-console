import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.urlPrefix = props.urlPrefix;
  }

  render() {
    return (
      <div className="Simple">
        Some content for Simple, and a couple of links
        <ul>
          <li>
            <a href={'#/' + this.urlPrefix + '/page1'}>page 1</a>
          </li>
          <li>
            <a href={'#/' + this.urlPrefix + '/page2'}>page 2</a>
          </li>
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  urlPrefix: PropTypes.string.isRequired,
};

export default App;
