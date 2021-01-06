import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';

import NavigationContainer from './src/navigation';

const App = () => {
  return (
    <RootSiblingParent>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer />
      </SafeAreaView>
    </RootSiblingParent>
  );
};

export default App;
