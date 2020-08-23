import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {MainPage, Profile, ProductPage, EditPage} from '../screens';
import {lang} from '../utils/lang';
import {Theme, normalize} from '../utils';

const Root = createStackNavigator(
  {
    MainPage: {
      screen: MainPage,
      navigationOptions: ({navigation}) => {
        return {
          title: lang.mainTitle,
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <IonIcons
                name="ios-person-circle-outline"
                size={normalize(30)}
                color={Theme.colors.primary}
              />
            </TouchableOpacity>
          ),
        };
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: lang.profileTitle,
      },
    },
    ProductPage: {
      screen: ProductPage,
      navigationOptions: ({navigation}) => {
        return {
          title: lang.productTitle,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('EditPage')}>
              <SimpleLineIcons
                name="pencil"
                size={normalize(22)}
                color={Theme.colors.primary}
              />
            </TouchableOpacity>
          ),
        };
      },
    },
    EditPage: {
      screen: EditPage,
      navigationOptions: {
        title: lang.editTitle,
      },
    },
  },
  {
    initialRouteName: 'MainPage',
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: () => (
          <HeaderBackButton
            labelVisible={false}
            tintColor={Theme.colors.primary}
            onPress={() => navigation.goBack()}
          />
        ),
        headerLeftContainerStyle: {
          marginLeft: normalize(10),
        },
        headerRightContainerStyle: {
          marginRight: normalize(10),
        },
        headerTitleStyle: {
          color: Theme.colors.text,
          fontSize: normalize(18),
          fontWeight: Theme.weight.Semibold,
        },
      };
    },
  },
);

export default createAppContainer(Root);
