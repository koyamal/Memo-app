/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => { handlePress(); }}
    >
      <Text style={styles.label}>LogOut</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255,255, 255, 0.7)',
  },
});
