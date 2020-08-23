import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';
import {addPurchase} from '../store/actions/permanentAction';
import {RowTwoTxt, Button} from '../common';
import {Theme, normalize, SCREEN_WIDTH, SCREEN_HEIGHT} from '../utils';
import {lang} from '../utils/lang';

class ProductPage extends Component {


  handlePress = () => {
    Alert.alert(
      'Добавлено!',
      'Свои покупки можете посмотреть в личном кабинете!',
    );
    this.props.addPurchase(this.props.productDetail);
  };
  render() {
    let isProductSelected = this.props.purchases.find(
      (x) => x.id === this.props.productDetail.id,
    );
    let date = moment(
      this.props.productDetail.createdDate,
      'DD/MM/YYYY hh:mm:ss',
    ).format('DD.MM.YYYY');
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>{this.props.productDetail.name}</Text>
          <RowTwoTxt title={lang.code} value={this.props.productDetail.code} />
          <RowTwoTxt
            title={lang.category}
            value={this.props.productDetail.category}
          />
          <RowTwoTxt
            title={lang.subCategory}
            value={this.props.productDetail.subCategory}
          />
          <RowTwoTxt title={lang.createdDate} value={date} />
        </View>
        {this.props.productDetail.comment && (
          <View style={styles.card}>
            <Text style={styles.commentHeader}>{lang.comment}</Text>
            <Text style={styles.comment}>
              {this.props.productDetail.comment}
            </Text>
          </View>
        )}
        {isProductSelected ? (
          <Text style={styles.added}>добавлено</Text>
        ) : (
          <Button
            text={lang.addToList}
            style={styles.btn}
            textStyle={styles.btnTxt}
            onPress={() => this.handlePress()}
          />
        )}
      </View>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    purchases: state.permanent.purchases,
    productDetail: state.temporary.productDetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPurchase: (data) => dispatch(addPurchase(data)),
  };
};
export default connect(mapPropsToState, mapDispatchToProps)(ProductPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: normalize(20),
    paddingHorizontal: '3%',
  },
  card: {
    backgroundColor: Theme.colors.white,
    borderRadius: normalize(8),
    marginBottom: normalize(10),
    paddingHorizontal: '4%',
    paddingVertical: normalize(20),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 3,
  },
  header: {
    fontSize: normalize(16),
    color: Theme.colors.primary,
    fontWeight: Theme.weight.Semibold,
    marginBottom: normalize(20),
  },
  commentHeader: {
    fontSize: normalize(14),
    color: Theme.colors.suvaGray,
    fontWeight: Theme.weight.Medium,
    marginBottom: normalize(15),
  },
  comment: {
    fontSize: normalize(14),
    color: Theme.colors.primary,
    fontWeight: Theme.weight.Medium,
  },
  btn: {
    width: SCREEN_WIDTH * 0.9,
    position: 'absolute',
    left: SCREEN_WIDTH * 0.05,
    bottom: SCREEN_HEIGHT * 0.05,
    backgroundColor: Theme.colors.secondary,
    paddingVertical: normalize(14),
    borderRadius: normalize(8),
  },
  btnTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
    fontWeight: Theme.weight.Semibold,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  added: {
    textAlign: 'center',
    width: SCREEN_WIDTH * 0.9,
    position: 'absolute',
    left: SCREEN_WIDTH * 0.05,
    bottom: SCREEN_HEIGHT * 0.05,
    fontSize: normalize(14),
    color: Theme.colors.secondary,
    fontWeight: Theme.weight.Semibold,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
