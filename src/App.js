import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tabs } from "antd";
import { default as Simple } from "./Simple";
import { default as ReactRouter } from "./ReactRouter";

const TabPane = Tabs.TabPane;

const BalrogUI = <div>Balrog</div>;

/* ADD YOUR APP HERE */
const APPS = [
  {
    prefix: "simple",
    title: "Simple",
    component: <Simple prefix="simple" />
  },
  {
    prefix: "react-router",
    title: "React Router",
    component: <ReactRouter prefix="react-router" />
  },
  { prefix: "balrog", title: "Balrog", component: BalrogUI }
];

class App extends Component {
  onChange = key => {
    let obj = APPS[key];
    window.history.pushState({}, obj.title, "#/" + obj.prefix);
  };

  render() {
    let prefix = window.location.hash.substr(2).split("/", 1)[0] || "";
    var activeKey = 0;
    for (var i = 0; i < APPS.length; i++) {
      if (APPS[i].prefix === prefix) {
        activeKey = i;
      }
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Mozilla Web Console</h1>
        </header>
        <Tabs defaultActiveKey={activeKey.toString()} onChange={this.onChange}>
          {APPS.map((obj, i) => (
            <TabPane tab={obj.title} key={i}>
              some tab content for {obj.title}
              {obj.component}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default App;
