import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';

import {Theme, normalize, SCREEN_WIDTH, SCREEN_HEIGHT} from '../utils';
import {lang} from '../utils/lang';
import {Button} from '../common';
import {updateProduct, onChange} from '../store/actions/temporaryAction';
import { NavigationActions } from 'react-navigation';

class EditPage extends Component {
  state = {
    name: this.props.productDetail.name,
    category: this.props.productDetail.category,
    comment: this.props.productDetail.comment,
  };

  handleInput = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handlePress = () => {
    let data = {
      name: this.state.name,
      category: this.state.category,
      comment: this.state.comment,
    };
    this.props.onChange('productDetail',{...this.props.productDetail, ...data});
    this.props.updateProduct(data);
    this.props.navigation.navigate('ProductPage');
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label={lang.productTitle}
          value={this.state.name}
          style={styles.input}
          theme={{
            colors: {
              primary: Theme.colors.suvaGray,
              underlineColor: 'transparent',
            },
          }}
          selectionColor={Theme.colors.suvaGray}
          onChangeText={(text) => this.handleInput('name', text)}
        />
        <TextInput
          mode="outlined"
          label={lang.category}
          value={this.state.category}
          style={styles.input}
          theme={{
            colors: {
              primary: Theme.colors.suvaGray,
              underlineColor: 'transparent',
            },
          }}
          selectionColor={Theme.colors.suvaGray}
          onChangeText={(text) => this.handleInput('category', text)}
        />
        <TextInput
          mode="outlined"
          maxLength={30}
          label={lang.comment}
          value={this.state.comment}
          style={styles.input}
          theme={{
            colors: {
              primary: Theme.colors.suvaGray,
              underlineColor: 'transparent',
            },
          }}
          selectionColor={Theme.colors.suvaGray}
          onChangeText={(text) => this.handleInput('comment', text)}
        />
        <Button
          text={lang.save}
          style={styles.btn}
          textStyle={styles.btnTxt}
          onPress={() => this.handlePress()}
        />
      </View>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    productDetail: state.temporary.productDetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(onChange(name, value)),
    updateProduct: (data) => dispatch(updateProduct(data)),
  };
};
export default connect(mapPropsToState, mapDispatchToProps)(EditPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: '4%',
  },
  input: {
    backgroundColor: Theme.colors.white,
    marginTop: normalize(15),
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
});
