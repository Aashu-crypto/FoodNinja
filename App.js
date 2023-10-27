import {View,Text} from 'react-native'
import auth from '@react-native-firebase/auth';
import React, {useEffect,useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {Navigator} from './screens/RootStackScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    BootSplash.hide({fade: true, duration: 2000});
  }, []);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
