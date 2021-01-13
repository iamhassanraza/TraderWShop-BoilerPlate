import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';

import NavigationContainer from './src/navigation';
import {Provider} from 'react-redux';
import {store, persistor, PersistGate} from './src/store/ConfigureStore';

const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
            <NavigationContainer />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
