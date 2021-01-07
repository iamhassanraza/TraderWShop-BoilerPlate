import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';

import NavigationContainer from './src/navigation';
import {colors} from './src/utils/Theme';
import {Provider} from 'react-redux';
import store from './src/store/ConfigureStore';

const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer />
        </SafeAreaView>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
