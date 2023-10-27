import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const LoginInScreen = () => {
  const [userInfo, setState] = useState();
  useEffect(
    () =>
      GoogleSignin.configure({
        webClientId:
          '553631473010-v9af2ndv29hrh2d7r7op7veis81kpmlk.apps.googleusercontent.com',
      }),
    [],
  );
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text>LoginInScreen {}</Text>

      <View>
        <Image
          source={require('../../assets/img/splashlogo.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.login_text}>Login To Your Account</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <Text style={{alignSelf: 'center', fontWeight: '600', fontSize: 13}}>
        or continue with{' '}
      </Text>
      <Pressable
        onPress={() => signIn()}
        style={{height: 100, width: 100, backgroundColor: 'red'}}>
        <Text>Press ME</Text>
      </Pressable>
    </View>
  );
};

export default LoginInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 190,
    width: 180,
    alignSelf: 'center',
    marginTop: 18,
  },
  login_text: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: '90%',
    alignSelf: 'center',
  },
});
