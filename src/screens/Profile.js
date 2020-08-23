import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CustomList} from '../common';

import {deleteFromPurchases} from '../store/actions/permanentAction';

class Profile extends Component {
  state = {
    searchTxt: '',
    purchases: this.props.purchases,
  };

  handleChangeSearch = (text) => {
    this.setState({
      searchTxt: text,
    });
    const totalPurchases = this.props.purchases;
    var purchasesWithSameName = totalPurchases.filter((e) =>
      e.name.toLowerCase().includes(text.toLowerCase()),
    );
    this.setState({
      purchases: purchasesWithSameName,
    });
  };

  handleDelete = (item) => {
    this.props.deleteFromPurchases(item.item);
  };

  render() {
    return (
      <CustomList
        data={this.state.purchases}
        deleteBtn={true}
        cardDisabled={true}
        searchValue={this.state.searchTxt}
        onChangeSearchTxt={this.handleChangeSearch}
        onDelete={this.handleDelete}
      />
    );
  }
}
const mapPropsToState = (state) => {
  return {
    purchases: state.permanent.purchases,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromPurchases: (data) => dispatch(deleteFromPurchases(data)),
  };
};
export default connect(mapPropsToState, mapDispatchToProps)(Profile);
