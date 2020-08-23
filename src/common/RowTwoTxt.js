import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme, normalize} from '../utils';
const RowTwoTxt = ({title, value}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default RowTwoTxt;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:normalize(4)
  },
  text: {
    fontSize: normalize(14),
    color: Theme.colors.primary,
    fontWeight: Theme.weight.Medium,
  },
});
