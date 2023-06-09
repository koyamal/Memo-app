import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';

export default function LogInScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscrible = firebase.auth()
      .onAuthStateChanged((user) => {
        if (user) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'MemoList' }],
          });
        } else {
          setIsLoading(false);
        }
      });
    return unsubscrible;
  }, []);

  function handlePress() {
    setIsLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      .then(() => {
        setIsLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
          onChangeText={(text) => { setEmail(text); }}
        />
        <TextInput
          style={styles.input}
          value={password}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          onChangeText={(text) => { setPassword(text); }}
        />
        <Button
          label="Submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 23,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});
