import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router} from 'director/build/director';

const Home = <div>This is the home</div>;
const Page1 = <div>This is page 1</div>;
const Page2 = <div>This is page 2</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.urlPrefix = props.urlPrefix;

    let routes = {};
    routes['/' + this.urlPrefix] = () => (this.contentComponent = Home);
    routes['/' + this.urlPrefix + '/page1'] = () =>
      (this.contentComponent = Page1);
    routes['/' + this.urlPrefix + '/page2'] = () =>
      (this.contentComponent = Page2);
    const router = new Router(routes);

    router.init();
  }

  render() {
    return (
      <div className="DirectorRouter">
        Some content for DirectorRouter, and a couple of links
        <ul>
          <li>
            <a href={'#/' + this.urlPrefix + '/page1'}>page 1</a>
          </li>
          <li>
            <a href={'#/' + this.urlPrefix + '/page2'}>page 2</a>
          </li>
        </ul>
        <div>The proper content:</div>
        {this.contentComponent}
      </div>
    );
  }
}

App.propTypes = {
  urlPrefix: PropTypes.string.isRequired,
};

export default App;
