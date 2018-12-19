import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { Global, css } from '@emotion/core';
import ui_store from 'stores/ui_store' ;

import { Button } from 'components';
//  inject fonts
const base = css(`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Source+Sans+Pro:300,400,600,700,900');
`);
const stores = { ui_store }
 
class App extends Component {
  render() {
    return (
      <Provider {...stores} >
        <div>
          <Global styles={base} />
          <div>
            content!
            <Button>Source Sans</Button>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
