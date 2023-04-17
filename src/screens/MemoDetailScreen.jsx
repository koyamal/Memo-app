import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar />
      <View>
        <Text>買い物リスト1</Text>
        <Text>2023/4/17 16:05</Text>
      </View>
      <ScrollView>
        <Text>
          買い物リスト
          こんにちは、いい天気ですね。
          少し風が強いですが、暖かいです。
          昨日は雨が降っていたので、どうなるか不安でしたが晴れてよかったです。
          風がある日は髪の毛が乱れて大変ですが、気持ちよさもありますね。
          特に暑い日は風が吹くだけで涼しくなります。
        </Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  );
}
