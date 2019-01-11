import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { Global, css } from '@emotion/core';
import ui_store from 'stores/ui_store';

import ConnectAmazon from 'views/ConnectAmazon';

//  inject fonts
const base = css(`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Source+Sans+Pro:300,400,600,700,900');
  html {
    min-height:100%;
    min-width: 100%;
    background: #FCFCFC;
  }

  body {
    min-height:100%;
    min-width: 100%;
  }
`);

const stores = { ui_store }

class App extends Component {
  render() {
    return (
      <Provider {...stores} >
        <div>
          <Global styles={base} />
          <ConnectAmazon />
        </div>
      </Provider>
    );
  }
}

export default App;
