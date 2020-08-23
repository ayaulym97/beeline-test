import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {Theme, normalize} from '../utils';

const ProductItem = ({item, cardDisabled, onPress, deleteBtn, onDelete}) => {
  let date = moment(item.item.createdDate, 'DD/MM/YYYY hh:mm:ss').format(
    'DD.MM.YYYY',
  );
  return (
    <TouchableOpacity
      disabled={cardDisabled}
      key={item.item.id}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.header}>{item.item.name}</Text>
        <Text style={styles.category}>{item.item.category}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subTxt}>{item.item.subCategory}</Text>
        <Text style={styles.subTxt}>{item.item.code}</Text>
        <Text style={styles.subTxt}>{date}</Text>

        {deleteBtn && (
          <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
            <IonIcons
              name="ios-trash"
              size={normalize(15)}
              style={styles.deleteIcon}
              color={Theme.colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.colors.white,
    borderRadius: normalize(8),
    marginBottom: normalize(10),
    paddingHorizontal: '3%',
    paddingVertical: normalize(18),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    maxWidth: '85%',
    fontSize: normalize(14),
    color: Theme.colors.primary,
    fontWeight: Theme.weight.Bold,
  },
  subTxt: {
    marginTop: normalize(14),
    fontSize: normalize(13),
    color: Theme.colors.darkGray,
  },
  category: {
    fontSize: normalize(13),
    color: Theme.colors.primary,
    fontWeight: Theme.weight.Medium,
  },
  deleteBtn: {
    backgroundColor: Theme.colors.red,
    borderRadius: normalize(10),
    marginTop: normalize(15),
  },
  deleteIcon: {
    marginHorizontal: normalize(18),
    marginVertical: normalize(3),
  },
});
