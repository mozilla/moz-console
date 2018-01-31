import React, {Component} from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';

const Home = () => <div>This is the home</div>;
const Page1 = () => <div>This is page 1</div>;
const Page2 = () => <div>This is page 2</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.prefix = props.prefix;
  }

  render() {
    return (
      <HashRouter basename={'/' + this.prefix}>
        <div className="ReactRouter">
          Some content for ReactRouter, and a couple of links
          <ul>
            <li>
              <Link to="/page1">page 1</Link>
            </li>
            <li>
              <Link to="/page2">page 2</Link>
            </li>
          </ul>
          <div>The proper content:</div>
          <Switch>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route component={Home} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
