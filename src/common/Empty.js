import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Theme, normalize, SCREEN_HEIGHT} from '../utils';
const Empty = ({}) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="unknowfile1"
        color={Theme.colors.lightGray}
        size={normalize(50)}
      />
      <Text style={styles.text}>Не найдено</Text>
    </View>
  );
};

export default Empty;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: normalize(14),
    color: Theme.colors.lightGray,
  },
});
