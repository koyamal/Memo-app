/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;

  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    ref.add({
      bodyText: 'Hello',
    })
      .then((docRef) => {
        /* eslint-disable-next-line */
        console.log('Created. ', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        /* eslint-disable-next-line */
        console.log('Error. ', error);
      });
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={() => { handlePress(); }} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
