import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';

import {LogBox} from 'react-native';

import NavigationContainer from './src/navigation';
import {Provider} from 'react-redux';
import {store, persistor, PersistGate} from './src/store/ConfigureStore';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
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
