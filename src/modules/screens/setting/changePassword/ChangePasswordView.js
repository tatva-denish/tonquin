import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Platform
} from 'react-native';
import * as commonStyle from '../../../../theme/css/style';
import * as commonFunctions from '../../../../theme/js/CommonFunctions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

class ChangePasswordView extends Component {

  static navigationOptions = () => ({
    title: 'Change Password',
    tabBarLabel: null,
    gesturesEnabled: true,
    // header: null,
    // tabBarOptions: {
    //   activeTintColor: '#e91e63'
    // },
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../../../../images/settings.png')}
        style={{
          tintColor: focused ? '#F13451' : '#2F313D'
        }}
      />
    )
  });
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={commonStyle.container}>
        <KeyboardAwareScrollView extraHeight={0}>
          <View style={[styles.container, {}]}>

            {/* Create main View for User Textfiled */}
            <View style={[commonStyle.container, styles.container]}>

              <View style={styles.horizontal}>
                <Image
                  style={styles.icons}
                  source={require('../../../../../images/PasswordIcon.png')} />
                <View style={styles.textInputView}>
                  <TextInput
                    style={styles.textInput}
                    autoCapitalize='none'
                    placeholder='Current Password'
                    returnKeyType='next'
                    secureTextEntry={true}
                    underlineColorAndroid='#D3D3D3'
                    onSubmitEditing={() => this.refs.NewPasswordInput.focus()} />
                  {
                    Platform.OS === 'ios' && (<View
                      style={{
                        backgroundColor: commonStyle.colorGrey,
                        height: 2
                      }} />
                    )}
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10
                }}>
                <Image
                  style={styles.icons}
                  source={require('../../../../../images/PasswordIcon.png')} />
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
                    Platform.OS === 'ios' && (<View style={{ backgroundColor: commonStyle.colorWhite, height: 1 }} />)
                  }
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 5,
                  paddingLeft: 22
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
                    Platform.OS === 'ios' && (<View style={{ backgroundColor: commonStyle.colorWhite, height: 1 }} />)
                  }
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink, { marginBottom: 20 }]}>
          <Text style={{ fontSize: 16, color: 'white' }}>Submit</Text>
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

export default connect()(ChangePasswordView);
