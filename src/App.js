import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tabs } from "antd";
import { default as Simple } from "./Simple";

const TabPane = Tabs.TabPane;

const SymbolsUI = <div>Symbols</div>;

const BalrogUI = <div>Balrog</div>;

/* ADD YOUR APP HERE */
const APPS = [
  {
    prefix: "simple",
    title: "Simple",
    component: <Simple prefix="simple" />
  },
  { prefix: "symbols", title: "Symbols", component: SymbolsUI },
  { prefix: "balrog", title: "Balrog", component: BalrogUI }
];

class App extends Component {
  onChange = key => {
    let obj = APPS[key];
    window.history.pushState({}, obj.title, "#/" + obj.prefix);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Mozilla Web Console</h1>
        </header>
        <Tabs defaultActiveKey="0" onChange={this.onChange}>
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
