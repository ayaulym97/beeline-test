import React, {PureComponent} from 'react';
import {FlatList, Platform, ActivityIndicator, StyleSheet} from 'react-native';

import {Searchbar} from 'react-native-paper';
import {ProductItem, Empty} from '../common';

import {normalize} from '../utils';
import {lang} from '../utils/lang';

export default class CustomList extends PureComponent {
  renderHeader = () => {
    return (
      <Searchbar
        style={styles.search}
        placeholder={lang.search}
        value={this.props.searchValue}
        onChangeText={this.props.onChangeSearchTxt}
      />
    );
  };
  renderFooter = () => {
    return <ActivityIndicator animating={this.props.loading} />;
  };
  renderEmpty = () => {
    return <Empty />;
  };

  render() {
    const {
      data,
      loading,
      deleteBtn,
      cardDisabled,
      refreshing,
      onRefresh,
      onEndReached,
      onPressItem,
      onDelete,
    } = this.props;
    return (
      <FlatList
        data={data}
        style={styles.container}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={loading && this.renderFooter}
        ListEmptyComponent={this.renderEmpty}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 10}
        renderItem={(item) => (
          <ProductItem
            item={item}
            deleteBtn={deleteBtn}
            cardDisabled={cardDisabled}
            onPress={() => onPressItem(item)}
            onDelete={() => onDelete(item)}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: '3%',
  },

  search: {
    marginTop: normalize(8),
    marginBottom: normalize(15),
  },
});
