import React from 'react';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import HomeScreen from '@src/Home/Home';
import RoomScreen from '@src/Room/Room';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {configureStore} from './store';
const Stack = createStackNavigator();
const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Room" component={RoomScreen} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
