import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>買い物リスト1</Text>
            <Text>2023/4/17 16:05</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト2</Text>
            <Text>2023/4/17 16:05</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト3</Text>
            <Text>2023/4/17 16:05</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
