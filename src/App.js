import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import { Tabs } from 'antd'
import { createLocation } from 'history'
const TabPane = Tabs.TabPane;


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.tabs = [
      {"path": "/pollbot", "title": "PollBot", "component": PollBotUI},
      {"path": "/symbols", "title": "Symbols", "component": SymbolsUI},
      {"path": "/balrog",  "title": "Balrog", "component": BalrogUI},
    ]
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  }

  onChange = (key) => {
    let obj = this.tabs[key];
    const { history} = this.context.router;
    const nextTo = createLocation(obj.path);
    history.push(nextTo);
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Mozilla Web Console</h1>
        </header>
        <Redirect to="/pollbot"/>
        <Tabs defaultActiveKey="0" onChange={this.onChange}>
        {this.tabs.map((obj, i) => (
          <TabPane tab={obj.title} key={i}>
            <Route path={obj.path} component={obj.component} />
          </TabPane>
        ))}
        </Tabs>
        
      </div>
    );
  }
}

export default App;

const PollBotUI = () => (
    <div>PollBot</div>
);


const SymbolsUI = () => (
    <div>Symbols</div>
);


const BalrogUI = () => (
    <div>Balrog</div>
);
