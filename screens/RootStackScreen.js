import {useSelector} from 'react-redux';
import SignInScreen from './LoginScreens/SignInScreen';
import LoginInScreen from './LoginScreens/LoginInScreen';
import {useEffect} from 'react';
const Navigator = () => {
  const navigation = useSelector(state => state.screen.screen);
  useEffect(() => console.log(navigation), []);
  switch (navigation) {
    case 'MAIN':
      return <LoginInScreen />;
    default:
      return <LoginInScreen />;
  }
};
export {Navigator};
