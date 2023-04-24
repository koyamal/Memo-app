/* eslint import/no-extraneous-dependencies: 0 */
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          /* eslint-disable-next-line */
          console.log(doc.id, doc.data());
        });
      });
    }

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />

      <CircleButton name="plus" onPress={() => { navigation.navigate('MemoCreate'); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
