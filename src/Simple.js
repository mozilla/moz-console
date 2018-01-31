import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.prefix = props.prefix;
  }

  render() {
    return (
      <div className="Simple">
        Some content for Simple, and a couple of links
        <ul>
          <li>
            <a href={'#/' + this.prefix + '/page1'}>page 1</a>
          </li>
          <li>
            <a href={'#/' + this.prefix + '/page2'}>page 2</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
