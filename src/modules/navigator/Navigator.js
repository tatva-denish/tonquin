import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

// import CounterViewContainer from '../counter/CounterViewContainer';
// import ColorViewContainer from '../colors/ColorViewContainer';
//Initialization from SignInViewContainer
import SignInViewContainer from '../screens/singIn/SignInViewContainer';
import ForgotViewContainer from '../screens/forgotPassword/ForgotViewContainer';
import SignUpViewContainer from '../screens/signUp/SignUpViewContainer';
//Main Tab bar container for globally
import HomeViewContainer from '../screens/home/HomeViewContainer';
import SettingViewContainer from '../screens/setting/settingMenu/SettingViewContainer';
import ReportViewContainer from '../screens/report/ReportViewContainer';
import EditProfileViewContainer from '../screens/setting/editProfile/EditProfileViewContainer';
import ChangePasswordViewContainer from '../screens/setting/changePassword/ChangePasswordViewContainer';
import EditPayoutDetailsViewContainer from '../screens/setting/editPayoutDetails/EditPayoutDetailsViewContainer';
import PrivacyPolicyViewContainer from '../screens/setting/privacyPolicy/PrivacyPolicyViewContainer';
import TermsNConditionsViewContainer from '../screens/setting/termsNConditions/TermsNConditionsViewContainer';
import ResetPasswordViewContainer from '../screens/resetPassword/ResetPasswordViewContainer';
import HistoryViewContainer from '../screens/history/HistoryViewContainer';
import PickUpDeliveryInfoViewContainer from '../screens/pickupdeliveryinfo/PickUpDeliveryInfoViewContainer';
import PickUpViewContainer from '../screens/pickup/PickUpViewContainer';
import DropOffViewContainer from '../screens/dropOff/DropOffViewContainer';
import ProfileViewContainer from '../screens/profile/ProfileViewContainer';
//Tab bar navigator
const HomeNavigator = StackNavigator({
  HomeView: {
    screen: HomeViewContainer,
    navigationOptions: {}
  }
});

const ReportNavigator = StackNavigator({
  ReportView: {
    screen: ReportViewContainer,
    navigationOptions: {}
  },
  PickUpView: {
    screen: PickUpViewContainer,
    navigationOptions: {tabBarVisible: false}
  },
  DropOffView: {
    screen: DropOffViewContainer,
    navigationOptions: {tabBarVisible: false}
  }
});
//History view check
const HistoryNavigator = StackNavigator({
  HistoryView: {
    screen: HistoryViewContainer,
    navigationOptions: {}
  },
  PickUpDeliveryInfoView: {
    screen: PickUpDeliveryInfoViewContainer,
    navigationOptions: {tabBarVisible: false}
  }
});

const SettingNavigator = StackNavigator({
  SettingView: {
    screen: SettingViewContainer,
    navigationOptions: {}
  },
  EditProfileView: {
    screen: EditProfileViewContainer,
    navigationOptions: {tabBarVisible: false}
  },
  ChangePasswordView: {
    screen: ChangePasswordViewContainer,
    navigationOptions: {tabBarVisible: false}
  },
  ProfileView: {
    screen: ProfileViewContainer,
    navigationOptions: {tabBarVisible: false}
  },
  EditPayoutDetailsView: {
    screen: EditPayoutDetailsViewContainer,
    navigationOptions: {tabBarVisible: false}
  },
  PrivacyPolicyView: {
    screen: PrivacyPolicyViewContainer,
    navigationOptions: {tabBarVisible: false}
  },
  TermsNConditionsView: {
    screen: TermsNConditionsViewContainer,
    navigationOptions: {tabBarVisible: false}
  }
});

const UnauthorizedNavigator = StackNavigator(
  {
    SignInView: {
      screen: SignInViewContainer,
      navigationOptions: {
        header: null
      }
    },
    ForgotView: {screen: ForgotViewContainer},
    SignUpView: {screen: SignUpViewContainer},
    ResetPasswordView: {screen: ResetPasswordViewContainer}
  },
  {headerMode: 'screen'},
  {initialRouteName: 'SignInView'}
);

const AuthorizedNavigator = TabNavigator(
  {
    HomeView: {
      screen: HomeNavigator,
      navigationOptions: {}
    },
    ReportView: {
      screen: ReportNavigator,
      navigationOptions: {}
    },
    HistroyView: { //<----Change with History button in navigation tab
      screen: HistoryNavigator,//<----Change with History button in navigation tab
      navigationOptions: {}
    },
    SettingView: {
      screen: SettingNavigator,
      navigationOptions: {}
    }
  },
  {
    tabBarPosition: 'bottom',
    // animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#F13451',
      inactiveTintColor: '#2F313D',
      activeBackgroundColor: '#FFFFFF',
      inactiveBackgroundColor: '#FFFFFF',
      style: {
        backgroundColor: '#FFFFFF'
      },
      showLabel: false,
      showIcon: true
    },
    ...Platform.select({
      android: {
        swipeEnabled: false
      }
    }),
    ...Platform.select({
      ios: {
        swipeEnabled: false
      }
    })
  }
);

const AppNavigator = StackNavigator(
  {
    Unauthorized: {
      screen: UnauthorizedNavigator,
      navigationOptions: {
        header: null
      } // <----StackNavigator
    },
    Authorized: {
      screen: AuthorizedNavigator,
      navigationOptions: {
        header: null
      } // <----TabNavigator
    }
  },
  {headerMode: 'screen'},
  {initialRouteName: 'Unauthorized'}
);

export default AppNavigator;

// TabNavigator is nested inside StackNavigator
/*export const MainScreenNavigator = TabNavigator({
  Counter: {screen: CounterViewContainer},
  Color: {screen: ColorViewContainer}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'Tonquin',
  headerTitleStyle: {color: 'white'},
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
};*/

// Root navigator is a StackNavigator
// const AppNavigator = StackNavigator({
//   // InfiniteColorStack: {screen: ColorViewContainer}
// });
