import React from "react";
import {View, Text, StyleSheet , LogBox} from "react-native";
import Main from "./Screens/Main";

import {Provider} from "react-redux"
import { myStore } from "./Redux/ReduxStore";

LogBox.ignoreAllLogs();

const App = () => {
  return(
    <Provider store={myStore}>
      <Main/>
    </Provider>
  )
}


export default App;
