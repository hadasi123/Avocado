import React from 'react';
import {Navigator} from "./components"
import store from "./store";
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
      </Provider>
  );
};

export default App;