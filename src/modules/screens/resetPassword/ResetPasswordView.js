import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Image, Platform, TextInput, TouchableOpacity} from 'react-native';

/* import common styles & functions */
import * as commonStyle from '../../../theme/css/style';
import * as commonFunctions from '../../../theme/js/CommonFunctions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class ResetPasswordView extends Component {
  /* set header options */
  static navigationOptions = () => ({
    title: 'Reset Password',
    tabBarLabel: null,
    gesturesEnabled: true,
    // header: null,
    // tabBarOptions: {
    //   activeTintColor: '#e91e63'
    // },
    tabBarIcon: ({focused}) => (
      <Image
        source={require('../../../../images/settings.png')}
        style={{
          tintColor: focused ? '#F13451' : '#2F313D'
        }}
      />
    )
  });
  constructor() {
    super();
  }
  /* Generate View of Reset Password */
  render() {
    return (
      <View style={commonStyle.container}>
        <KeyboardAwareScrollView extraHeight={0} innerRef={(ref) => {this.scroll = ref;}}>
          <View style={[styles.container, {}]}>

            {/* Create main View for User Textfiled */}
            <View style={[commonStyle.container, styles.container]}>
              <View>
                <Image style={styles.headerImage} source={require('../../../theme/images/logo-example.png')}/>
              </View>
              <View style={styles.accountWrap}>
                <Text style={styles.accountText}>Reset Your Password</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: '5%'
                }}>
                <Image
                  style={styles.icons}
                  source={require('../../../../images/PasswordIcon.png')} />
                <View style={styles.textInputView}>
                  <TextInput
                    ref='NewPasswordInput'
                    style={styles.textInput}
                    autoCapitalize='none'
                    placeholder='New Password'
                    secureTextEntry={true}
                    returnKeyType='next'
                    underlineColorAndroid='#D3D3D3'
                    onSubmitEditing={() => this.refs.ConfirmPasswordInput.focus()} />
                  {
                    Platform.OS === 'ios' && (<View style={{backgroundColor: commonStyle.colorWhite, height: 1}} />)
                  }
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: '0.5%',
                  paddingLeft: '7%'
                }}>
                <View style={styles.textInputView}>
                  <TextInput
                    ref='ConfirmPasswordInput'
                    style={styles.textInput}
                    autoCapitalize='none'
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    returnKeyType='go'
                    underlineColorAndroid='#D3D3D3' />
                  {
                    Platform.OS === 'ios' && (<View style={{backgroundColor: commonStyle.colorWhite, height: 1}} />)
                  }
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity style={[commonStyle.bgbutton,commonStyle.bgColorDarkPink, {marginBottom: 20}]}>
          <Text style={{fontSize: 16, color: 'white'}}>Update</Text>
        </TouchableOpacity>
      </View>
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
    resizeMode: 'stretch',
    height: commonFunctions.screenHeight(10, 0),
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
    marginTop: 15,
    marginBottom: 15
  },
  accountText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500'
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
export default connect()(ResetPasswordView);
