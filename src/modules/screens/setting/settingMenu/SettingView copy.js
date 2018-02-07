//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ListView,
  Platform,
  Dimensions
} from 'react-native';
import * as Auth from '../../../../services/Auth';
// import * as commonFunctions from '../../../../theme/js/CommonFunctions';
import * as commonStyle from '../../../../theme/css/style';
// import {NavigationActions} from 'react-navigation'; import AppNavigator from
// '../../../navigator/Navigator';
import {connect} from 'react-redux';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
// create a component
class SettingView extends Component {
  constructor() {
    super();
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    // this.state = {
    //   settings: ds.cloneWithRows([
    //     "Edit Profile",
    //     "Change Password",
    //     "Edit Payout Details",
    //     "Privacy Policy",
    //     "Terms & Conditions"
    //   ])
    // };
  }
  static navigationOptions = () => ({
    title: 'Settings',
    tabBarLabel: null,
    gesturesEnabled: false,
    // header: null, tabBarOptions: {   activeTintColor: '#e91e63' },
    tabBarIcon: ({focused}) => (
      <Image
        source={require('../../../../../images/settings.png')}
        style={{
          tintColor: focused ? '#F13451' : '#2F313D'
        }}
      />
    )
  });

  componentDidUpdate() {
    this.settingMenuDetails();
  }

  settingMenuDetails() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (ds.cloneWithRows([
      'Edit Profile',
      'Change Password',
      'Edit Payout Details',
      'Privacy Policy',
      'Terms & Conditions'
    ]));
  }

  logoutAction = () => {
    this.props.dispatch(Auth.resetTo(this.props, 'Unauthorized'));
    // this.resetTo('Unauthorized', { routeName: 'ForgotView' });
    // this.props.navigation.navigate('Unauthorized', { routeName: 'ForgotView' });
  };

  alertItemName = item => {
    switch (item) {
      case 'Edit Profile':
        this.props.navigation.navigate('ProfileView');
        // this.props.navigation.navigate('EditProfileView');
        break;
      case 'Change Password':
        this.props.navigation.navigate('ChangePasswordView');
        break;
      case 'Edit Payout Details':
        this.props.navigation.navigate('EditPayoutDetailsView');
        break;
      case 'Privacy Policy':
        this.props.navigation.navigate('PrivacyPolicyView');
        break;
      case 'Terms & Conditions':
        this.props.navigation.navigate('TermsNConditionsView');
        // this.handleEmail();
        break;
      default:
        break;
    }
  };

  //  EditProfileAction = () => {
  //   this.props.navigation.navigate('EditProfileView');
  // };

  // <TouchableOpacity
  //           // style={styles.logoutButton}
  //           onPress={() => this.EditProfileAction()}
  //         >
  //           <Text>Edit Profile</Text>
  //         </TouchableOpacity>
  render() {
    return (
      <View style={styles.containerView}>
        <View style={{backgroundColor: 'red', flex: 1}}>
          <ListView
            dataSource={this.settingMenuDetails()}
            style={{
              alignSelf: 'center',
              width: deviceWidth
            }}
            renderSeparator={(sectionId, rowId) => (
              <View key={rowId} style={styles.separator} />
            )}
            renderRow={rowData => (
              <View>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.alertItemName(rowData)}
                >
                  <View style={styles.cellView}>
                    <Text style={styles.titleMenu}>{rowData}</Text>
                    <Image
                      source={require('../../../../../images/Collapse_Icon.png')}
                      style={styles.image}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={[
            commonStyle.bgbutton,
            commonStyle.bgColorDarkPink,
            {position: 'absolute'}
          ]}
          onPress={() => {
            this.logoutAction();
          }}
        >
          <Text style={{fontSize: 16, color: 'white'}}>Logout</Text>
        </TouchableOpacity>
        {Platform.OS === 'ios' ? (
          <Text
            style={{
              // fontFamily: Fonts.LatoRegular,
              // color: Colors.grayColor,
              fontSize: 10,
              position: 'absolute',
              bottom: 5,
              alignSelf: 'center'
            }}
          >
            {/* Version : 1.0.3(8)(8) */}
          </Text>
        ) : (
          <Text
            style={{
              // fontFamily: Fonts.LatoRegular,
              // color: Colors.grayColor,
              fontSize: 10,
              position: 'absolute',
              bottom: 5,
              alignSelf: 'center'
            }}
          >
            {/* Version : 1.0.18 */}
          </Text>
        )}
      </View>
    );
  }
}
// define your styles
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  cellView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  },
  titleMenu: {
    marginLeft: 15,
    fontSize: 16,
    // fontFamily: Fonts.LatoRegular,
    color: '#232323'
  },
  image: {
    resizeMode: 'center',
    position: 'absolute',
    right: 10,
    top: -5,
    height: 30,
    width: 30
  },
  logoutView: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    width: deviceWidth
  },
  logoutButton: {
    backgroundColor: '#F13451',
    width: deviceWidth * 65 / 100,
    height: deviceHeight * 8 / 100,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
    // marginBottom: 15
  },
  logoutTitle: {
    fontSize: 16,
    // fontFamily: Fonts.LatoRegular,
    color: '#ffffff'
  },
  buttons: {
    width: deviceWidth,
    height: 50,
    justifyContent: 'center'
  }
});

//make this component available to the app export default SettingView;
export default connect()(SettingView);
