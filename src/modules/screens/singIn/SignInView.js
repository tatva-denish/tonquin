//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  KeyboardAvoidingView
  // Alert
} from 'react-native';
import * as commonFunctions from '../../../theme/js/CommonFunctions';
import {connect} from 'react-redux';
import * as commonStyle from '../../../theme/css/style';
import {Fonts} from '../../../theme/css/common';
import * as Auth from '../../../services/Auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// create a component
class SignInView extends Component {
  state = {
    loginUser: '',
    loginPassword: '',
    loginObject: {usertext: '', passwordtext: ''},
    isError: false,
    errorMessage:
      'The Username or Password you entered didn’t match our records. Please try again.'
  };

  componentWillReceiveProps() {
    if (this.props.invalideCredential === true) {
      this.invalideCredentialMessage();
    }
  }
  onSignUpEvent() {
    this.props.navigation.navigate('SignUpView');
  }
  onForgotPasswordEvent() {
    this.props.navigation.navigate('ForgotView');
  }

  invalideCredentialMessage() {
    this.setState({
      isError: true,
      errorMessage: this.props.errorMessage
    });
    this.props.dispatch(Auth.invalideLogin(false));
  }
  validateInput() {
    this.state.loginObject.usertext = this.state.loginUser;
    this.state.loginObject.passwordtext = this.state.loginPassword;
    if (this.state.loginUser.length === 0) {
      // Alert.alert('Please enter username');
      this.setState({
        isError: true,
        errorMessage: 'Please enter username'
      });
    } else if (this.state.loginPassword.length === 0) {
      // Alert.alert('Please enter password');
      this.setState({
        isError: true,
        errorMessage: 'Please enter password'
      });
    } else {
      this.setState({
        isError: false
      });
      // NetInfo.isConnected.fetch().then(isConnected => {});
      // this.loginRequest();
      this.props.navigation.navigate('Authorized');
    }
  }

  designForIos() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={[commonStyle.container, styles.masterView]}
      >
        {/* <Spinner visible={this.props.loading} /> */}
        <View style={[styles.container]}>
          {/* Header Text */}
          <Image
            style={styles.headerImage}
            source={require('../../../../images/logo-example.png')}
          />
          {this.state.isError && (
            <View style={{paddingTop: 5}}>
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: '#E8284D',
                    textAlign: 'center',
                    // fontFamily: Fonts.LatoRegular,
                    justifyContent: 'center'
                  }
                ]}
              >
                {this.state.errorMessage}
              </Text>
            </View>
          )}
          {/* Create main View for User Textfiled */}
          <View style={[commonStyle.container, styles.innerView]}>
            <View style={styles.EmailView}>
              <Image
                style={styles.icons}
                source={require('../../../../images/textEmailIcon.png')}
              />
              <View style={styles.textInputView}>
                {/* Create textfiled for enter user name */}

                <TextInput
                  style={styles.textInput}
                  autoCapitalize='none'
                  onChangeText={loginUser => this.setState({loginUser})}
                  placeholder='Email'
                  value={this.state.loginUser}
                  returnKeyType='next'
                  underlineColorAndroid='#D3D3D3'
                  onSubmitEditing={() => this.refs.PasswordInput.focus()}
                />
                {/* Hairline added below textfiled using View */}
                {Platform.OS === 'ios' && (
                  <View
                    style={{
                      backgroundColor: commonStyle.colorGrey,
                      height: 2
                    }}
                  />
                )}
              </View>
            </View>

            {/* Password creation */}
            <View style={styles.viewPassword}>
              <Image
                style={styles.icons}
                source={require('../../../../images/PasswordIcon.png')}
              />
              <View style={styles.textInputView}>
                {/* Create textfiled for enter user name */}
                <TextInput
                  ref='PasswordInput'
                  style={styles.textInput}
                  autoCapitalize='none'
                  onChangeText={loginPassword =>
                    this.setState({loginPassword})
                  }
                  placeholder='Password'
                  secureTextEntry={true}
                  value={this.state.loginPassword}
                  returnKeyType='go'
                  underlineColorAndroid='#D3D3D3'
                />
                {/* Hairline added below textfiled using View */}
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

            {/* forgot password */}
            <View style={styles.viewForgotPassword}>
              {/* Create textfiled for enter user name */}
              <TouchableOpacity onPress={() => this.onForgotPasswordEvent()}>
                <Text
                  style={[commonStyle.headerText, styles.textForgotPassword]}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Text */}
            {/* </View> */}
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink]}
            onPress={() => {
              this.validateInput();
            }}
          >
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  designForAndroid() {
    return (
      <KeyboardAwareScrollView extraHeight={0}>
        {/* <Spinner visible={this.props.loading} /> */}
        <View style={[styles.container, styles.masterView]}>
          {/* Header Text */}

          {/* Create main View for User Textfiled */}
          <View style={[commonStyle.container, styles.container]}>
            <Image
              style={styles.headerImage}
              source={require('../../../../images/logo-example.png')}
            />
            <View style={styles.accountWrap}>
              {this.state.isError && (
                <View style={{padding: 5}}>
                  <Text
                    style={[
                      {
                        fontSize: 12,
                        color: '#E8284D',
                        textAlign: 'center',
                        // fontFamily: Fonts.LatoRegular,
                        justifyContent: 'center'
                      }
                    ]}
                  >
                    {this.state.errorMessage}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.EmailView}>
              <Image
                style={styles.icons}
                source={require('../../../../images/textEmailIcon.png')}
              />
              <View style={styles.textInputView}>
                {/* Create textfiled for enter user name */}

                <TextInput
                  style={styles.textInput}
                  autoCapitalize='none'
                  onChangeText={loginUser => this.setState({loginUser})}
                  placeholder='Username or Email Address'
                  value={this.state.loginUser}
                  returnKeyType='next'
                  underlineColorAndroid='#D3D3D3'
                  onSubmitEditing={() => this.refs.PasswordInput.focus()}
                />
                {/* Hairline added below textfiled using View */}
                {Platform.OS === 'ios' && (
                  <View
                    style={{
                      backgroundColor: commonStyle.colorGrey,
                      height: 2
                    }}
                  />
                )}
              </View>
            </View>

            {/* Password creation */}
            <View style={styles.viewPassword}>
              <Image
                style={styles.icons}
                source={require('../../../../images/PasswordIcon.png')}
              />
              <View style={styles.textInputView}>
                {/* Create textfiled for enter user name */}
                <TextInput
                  ref='PasswordInput'
                  style={styles.textInput}
                  autoCapitalize='none'
                  onChangeText={loginPassword =>
                    this.setState({loginPassword})
                  }
                  placeholder='Password'
                  secureTextEntry={true}
                  value={this.state.loginPassword}
                  returnKeyType='go'
                  underlineColorAndroid='#D3D3D3'
                />
                {/* Hairline added below textfiled using View */}
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

            {/* forgot password */}
            <View style={styles.viewForgotPassword}>
              {/* Create textfiled for enter user name */}
              <TouchableOpacity onPress={() => this.onForgotPasswordEvent()}>
                <Text
                  style={[commonStyle.headerText, styles.textForgotPassword]}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Text */}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }

  render() {
    return (
      <View style={[styles.container]}>
        {Platform.OS === 'ios' ? this.designForIos() : this.designForAndroid()}
        {Platform.OS === 'ios' ? (
          <View
            style={{
              height: 50,
              backgroundColor: '#ffffff',
              justifyContent: 'center'
            }}
          />
        ) : (
          <View>
            <TouchableOpacity
              style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink]}
              onPress={() => {
                this.validateInput();
              }}
            >
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <View
              style={{
                height: 50,
                backgroundColor: '#ffffff',
                justifyContent: 'center'
              }}
            />
          </View>
        )}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  masterView: {
    marginLeft: 10,
    marginRight: 10
  },
  innerView: {
    marginLeft: 10,
    marginRight: 10,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    marginBottom: 80
  },
  EmailView: {
    flexDirection: 'row',
    marginBottom: 10
  },
  headerImage: {
    flexDirection: 'row',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 100,
    width: commonFunctions.screenWidth(75, 0),
    height: commonFunctions.screenHeight(15, 0)
  },
  icons: {
    alignSelf: 'center',
    marginRight: 7
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
  viewPassword: {
    flexDirection: 'row',
    paddingTop: 20
  },
  viewForgotPassword: {
    flexDirection: 'row',
    paddingLeft: 20,
    justifyContent: 'flex-start'
  },
  textForgotPassword: {
    fontSize: 11,
    fontFamily: Fonts.RobotoBlackItalic,
    paddingLeft: 10
  },
  viewBottom: {
    fontSize: 10,
    //   fontFamily: Fonts.LatoRegular,
    color: 'gray',
    justifyContent: 'center',
    marginLeft: commonFunctions.screenWidth(15.6, 0),
    marginRight: commonFunctions.screenWidth(15.6, 0),
    marginBottom: commonFunctions.screenHeight(1.8, 0),
    textAlign: 'center'
  },
  textBottom: {
    fontSize: 10,
    fontFamily: Fonts.RobotoMedium,
    justifyContent: 'center'
  },
  textLogin: {
    fontSize: 16,
    color: 'white'
  },
  textInput: {
    fontFamily: Fonts.RobotoMedium,
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

//make this component available to the app
// export default SignInView;
export default connect()(SignInView);
