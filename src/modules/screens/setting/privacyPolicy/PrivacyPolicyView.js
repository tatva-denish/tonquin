import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform
} from 'react-native';
// import * as commonStyle from '../../../../theme/css/style';
import * as commonFunctions from '../../../../theme/js/CommonFunctions';
import {connect} from 'react-redux';

class PrivacyPolicyView extends Component {
  static navigationOptions = () => ({
    title: 'Privacy Policy',
    tabBarLabel: null,
    gesturesEnabled: true,
    // header: null,
    // tabBarOptions: {
    //   activeTintColor: '#e91e63'
    // },
    tabBarIcon: ({focused}) => (
      <Image
        source={require('../../../../../images/settings.png')}
        style={{
          tintColor: focused ? '#F13451' : '#2F313D'
        }}
      />
    )
  });
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#FFF'
  },
  horizontal: {
    flexDirection: 'row'
  },
  headerImage: {
    alignSelf: 'center',
    height: commonFunctions.screenHeight(20, 0),
    width: commonFunctions.screenWidth(80, 0)
  },
  icons: {
    alignSelf: 'center',
    marginRight: 7,
    width: 15,
    height: 49,
    resizeMode: 'contain'
  },
  textInputView: {
    flexDirection: 'column',
    flex: 1
  },
  accountWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 50
  },
  accountText: {
    fontSize: 14,
    fontWeight: '200'
  },
  textInput: {
    ...Platform.select({
      ios: {
        height: 25
      }
    }),
    ...Platform.select({
      android: {
        fontSize: 16
      }
    })
  }
});

export default connect()(PrivacyPolicyView);
