//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  Dimensions
} from 'react-native';
import * as Auth from '../../../../services/Auth';
// import * as commonFunctions from '../../../../theme/js/CommonFunctions';
import * as commonStyle from '../../../../theme/css/style';
import {connect} from 'react-redux';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
// create a component
class SettingView extends Component {
  constructor() {
    super();
    this.state = {
      settings: [
        {key: 'Edit Profile'},
        {key: 'Change Password'},
        {key: 'Edit Payout Details'},
        {key: 'Privacy Policy'},
        {key: 'Terms & Conditions'}
      ]
    };
  }
  static navigationOptions = () => ({
    title: 'Settings',
    tabBarLabel: null,
    gesturesEnabled: false,
    tabBarIcon: ({focused}) => (
      <Image
        source={require('../../../../../images/settings.png')}
        style={{
          tintColor: focused ? '#F13451' : '#2F313D'
        }}
      />
    )
  });

  logoutAction = () => {
    this.props.dispatch(Auth.resetTo(this.props, 'Unauthorized'));
  };

  alertItemName = item => {
    switch (item) {
      case 'Edit Profile':
        this.props.navigation.navigate('EditProfileView');
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

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0
          // backgroundColor: '#979797'
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.containerView}>
        <View style={styles.wrapper}>
          <FlatList
            data={this.state.settings}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item}) => (
              <View style={styles.innerContainer}>
                <Text
                  style={styles.item}
                  onPress={this.alertItemName.bind(this, item.key)}
                >
                  {item.key}
                </Text>
                <Image
                  source={require('../../../../../images/Collapse_Icon.png')}
                  style={styles.image}
                />
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
  wrapper: {
    justifyContent: 'center',
    flex: 1
  },
  innerContainer: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#979797'
  },
  cellView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  item: {
    paddingLeft: 10,
    fontSize: 15
    // height: 44
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
    resizeMode: 'center'
    // position: 'absolute',
    // right: 10,
    // height: 30,
    // width: 30
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
