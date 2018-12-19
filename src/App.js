import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import ui_store from 'stores/ui_store' ;
const stores = { }
 
class App extends Component {
  render() {
    return (
      <Provider {...stores} >
      </Provider>
    );
  }
}

export default App;
