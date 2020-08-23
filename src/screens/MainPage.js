import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CustomList} from '../common';
import {addProducts, onChange} from '../store/actions/temporaryAction';

import products from '../productData/products.json';

class MainPage extends Component {
  state = {
    page: 1,
    refreshing: false,
    loading: false,
    products: [],
    searchTxt: '',
  };
  componentDidMount() {
    this.defaultProducts();
  }
  defaultProducts = () => {
    this.setState({
      refreshing: false,
    });
    let range = products._embedded.products.slice(0, 6);
    this.props.onChange('products', range);
  };
  handleLoadMore = () => {
    this.setState(
      (state) => ({
        refreshing: false,
        loading: true,
        page: state.page + 1,
      }),
      () => this.loadProducts(),
    );
  };
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => this.defaultProducts(),
    );
  };

  loadProducts = () => {
    const rangeValue = 7;
    const {page} = this.state;
    var start = (page - 1) * rangeValue;
    var end = page * rangeValue;
    let range = products._embedded.products.slice(start, end);
    this.props.addProducts(range);
    setTimeout(() => {
      this.setState({
        loading: false,
        refreshing: false,
      });
    }, 2000);
  };
  handleChangeSearch = (text) => {
    this.setState({
      page: 1,
      searchTxt: text,
    });
    if (text !== '') {
      const totalProducts = products._embedded.products;
      var productsWithName = totalProducts.filter((e) =>
        e.name.toLowerCase().includes(text.toLowerCase()),
      );
      this.props.onChange('products', productsWithName);
    } else {
      this.defaultProducts();
    }
  };

  handleProductPress = (item) => {
    this.props.onChange('productDetail', item.item);
    this.props.navigation.navigate('ProductPage');
  };

  render() {
    return (
      <CustomList
        data={this.props.products}
        deleteBtn={false}
        cardDisabled={false}
        searchValue={this.state.searchTxt}
        loading={this.state.loading}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        onEndReached={this.handleLoadMore}
        onChangeSearchTxt={this.handleChangeSearch}
        onPressItem={this.handleProductPress}
      />
    );
  }
}
const mapPropsToState = (state) => {
  return {
    products: state.temporary.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, data) => dispatch(onChange(name, data)),
    addProducts: (data) => dispatch(addProducts(data)),
  };
};
export default connect(mapPropsToState, mapDispatchToProps)(MainPage);
