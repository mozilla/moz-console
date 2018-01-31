import React, { Component } from "react";
import { Router } from "director/build/director";

const Home = <div>This is the home</div>;
const Page1 = <div>This is page 1</div>;
const Page2 = <div>This is page 2</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.prefix = props.prefix;

    let routes = {};
    routes["/" + this.prefix] = () => (this.contentComponent = Home);
    routes["/" + this.prefix + "/page1"] = () =>
      (this.contentComponent = Page1);
    routes["/" + this.prefix + "/page2"] = () =>
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
            <a href={"#/" + this.prefix + "/page1"}>page 1</a>
          </li>
          <li>
            <a href={"#/" + this.prefix + "/page2"}>page 2</a>
          </li>
        </ul>
        <div>The proper content:</div>
        {this.contentComponent}
      </div>
    );
  }
}

export default App;
