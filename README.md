# Mozilla web console

You're working on this new service/API, and at some point you'll have to create
a frontend for it. SO. BORING. So many decisions to take, (ugly) design to come
up with, choosing libs/frameworks/tooling.

Or you could follow the guidelines here to create a "moz console app", and not
have to bother with all of that.
Those guidelines are opinionated, but shouldn't be too much of a hassle. If
they are, please let us know.


## Creating a new app

We recommend using
[create-react-app](https://github.com/facebookincubator/create-react-app).

Even better, you can use the
[moz-console-react-scripts](https://www.npmjs.com/package/moz-console-react-scripts)
custom scripts that set you up to use [antd](http://ant.design/) and
[photon-ant](https://www.npmjs.com/package/photon-ant):

```sh
$ create-react-app foobar --scripts-version moz-console-react-scripts
$ cd foobar
$ yarn start
```

The idea is to have a root component that will be used by the moz console react
app. This root component will receive the following props:

- `urlPrefix`: the prefix to use with the router you chose (eg `foobar`,
  meaning the url will look like `#/foobar/some/url/relevant/to/your/app`)
- `request`: if you want to benefit from the moz console login/permissions
  management, you'll use `request` which is a thin wrapper around `fetch`
- `user`: a user object with some helpers like `isLoggedIn`, `username`, ...


## Hacking on the app locally

To run it locally, add the `moz-console` as a dependency:

```sh
$ yarn add moz-console
```

and use the `moz-console.Root` component in your entrypoint javascript file:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Root, request, user} from 'moz-console';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root>
    <App urlPrefix="foobar" request={ request } user={ user } />
  </Root>
, document.getElementById('root'));
registerServiceWorker();

```

You'll then hack on your `src/App.js` file as usual, run the project with `yarn
start` as usual, ...


## Publishing it with the moz-console

The only thing left to do so the app is accessible with all the others at
https://mozconsole.mozilla.org is to create a pull-request modifying the
`package.json` to add the app as a dependency, and modifying the `src/App.js`
file so it also includes your component:

```javascript
...
import {App as FoobarApp} from 'foobar';
...


class App extends Component {
  ...
  render() {
    return (
      <div className="App">
        ...
        <FoobarApp urlPrefix="foobar" request={ request } user={ user } />
        ...
      </div>
    );
  }
}
```


## CAVEATS

- routing: how can we make sure all apps are playing together even if they're
  using different routers (director, react-router, ...)
- assets/statics: how can we deploy the assets from the apps?
