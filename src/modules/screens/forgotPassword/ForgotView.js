//import liraries
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

import {connect} from 'react-redux';
import * as commonStyle from '../../../theme/css/style';
import {AllTexts} from '../../../theme/css/common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as commonFunctions from '../../../theme/js/CommonFunctions';

// create a component
class ForgotView extends Component {
  static navigationOptions = () => ({
    title: 'Forgot View',
    // (<Image source={require('../../../theme/images/logo-example.jpg')}/>),
    // headerTitleStyle: {
    //   textAlign: 'center',
    //   justifyContent: 'center',
    //   marginHorizontal: 55,
    //   alignItems: 'center'
    // },
    tabBarLabel: null,
    gesturesEnabled: true,
    // headerLeft: (
    //   <TouchableOpacity
    //     style={commonStyle.customBackButton}
    //     onPress={() => navigation.goBack()}
    //   >
    //     <Image
    //       style={[commonStyle.customBack, {}]}
    //       source={require('../../../../images/btnBack.png')}
    //     />
    //   </TouchableOpacity>
    // ),
    tabBarIcon: ({focused}) => (
      <Image
        source={require('../../../../images/settings.png')}
        style={{
          tintColor: focused ? '#F13451' : '#2F313D'
        }}
      />
    )
  });

  state = {
    usertext: '',
    isError: false,
    errorMessage:
      'The Username or Password you entered didn’t match our records. Please try again.'

  };
  componentWillReceiveProps() {
    if (this.props.invalideCredential === true) {
      this.submitOnPress();
    }
  }

  navigateBackPopToView() {
    this.props.navigation.goBack();
  }

  submitOnPress() {
    if (this.state.usertext.length === 0) {
      // Alert.alert('Please enter username');
      this.setState({
        isError: true,
        errorMessage: 'Please enter email.'
      });
    }
    else if (!commonFunctions.validateEmail(this.state.usertext)) {
      this.setState({
        isError: true,
        errorMessage: 'Please enter valid email.'
      });
    }
    else {
      this.setState({
        isError: false
      });
      this.props.navigation.navigate('ResetPasswordView');
    }
  }

  render() {
    return (
      <View style={commonStyle.container}>
        <KeyboardAwareScrollView extraHeight={0}>
          <View>
            <View style={styles.textTopMessage}>
              {this.state.isError === true ? (
                <View>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: '#E8284D',
                    textAlign: 'center',
                    justifyContent: 'center'
                  }
                ]}
              >
                {this.state.errorMessage}
              </Text>
              </View>
          ) : (
            <View>
            <Text style={styles.bolderText}>
                {AllTexts.ForgotText}{' '}
                <Text style={styles.textForgotMessage}>
                  {AllTexts.ForgotEmail}
                </Text>
              </Text>
              </View>
          )}

            </View>
            {/* { End: Header Text} */}
            {/* Start: Create main View for User Textfield & Icon */}
            <View style={[commonStyle.container, styles.innerView]}>
              <View style={styles.horizontal}>
                <Image
                  style={styles.icons}
                  source={require('../../../../images/textEmailIcon.png')}
                />
                <View style={styles.textInputView}>
                  {/* Create textfiled for enter user name */}
                  <TextInput
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={usertext => this.setState({usertext})}
                    placeholder='Email or Phone number'
                    returnKeyType='go'
                    underlineColorAndroid='#D3D3D3'
                    onSubmitEditing={() => {
                      this.submitOnPress();
                    }}
                  />
                  {/* Hairline added below textfield using View */}
                  {Platform.OS === 'ios' && (
                    <View
                      style={{
                        backgroundColor: commonStyle.colorWhite,
                        height: 1
                      }}
                    />
                  )}
                </View>
              </View>
            </View>
            {/* End: Create main View for User Textfield & Icon*/}
            {/* Start: Submit Button */}
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity
          style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink]}
          onPress={() => this.submitOnPress()}
        >
          <Text style={styles.textSubmitButton}>Submit</Text>
        </TouchableOpacity>
        {/* End: Submit Button */}

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  innerView: {
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    flex: 0
  },
  textTopMessage: {
    padding: commonFunctions.screenWidth(10.6, 0),
    paddingTop: commonFunctions.screenHeight(10.6, 0),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bolderText: {
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 11
  },
  textForgotMessage: {
    fontWeight: '100',
    fontSize: 11,
    justifyContent: 'center',
    textAlign: 'center'
    // backgroundColor: 'green'
  },
  horizontal: {
    flexDirection: 'row'
  },
  icons: {
    alignSelf: 'center',
    marginRight: 7,
    width: 19,
    height: 19,
    resizeMode: 'contain'
  },
  statusBarImgView: {
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backIcon: {
    alignSelf: 'center',
    marginLeft: 20
  },
  textInputView: {
    flexDirection: 'column',
    flex: 1
  },
  textInput: {
    ...Platform.select({
      ios: {
        height: 23
      }
    }),
    ...Platform.select({
      android: {
        fontSize: 15
      }
    })
  },
  normalText: {
    ...Platform.select({
      ios: {
        height: 20,
        color: commonStyle.colorBlack
      }
    }),
    ...Platform.select({
      android: {
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        color: commonStyle.colorBlack
      }
    })
  },
  textSubmitButton: {
    fontSize: 16,
    // fontFamily: Fonts.LatoBold,
    color: 'white'
  },
  textTermCondition: {
    fontSize: 10,
    //   fontFamily: Fonts.LatoRegular,
    justifyContent: 'center'
  },
  textBottom: {
    fontSize: 10,
    //   fontFamily: Fonts.LatoRegular,
    color: 'gray',
    justifyContent: 'center',
    marginLeft: commonFunctions.screenWidth(15.6, 0),
    marginRight: commonFunctions.screenWidth(15.6, 0),
    marginBottom: commonFunctions.screenHeight(1.8, 0),
    textAlign: 'center'
  }
});

//make this component available to the app
export default connect()(ForgotView);
