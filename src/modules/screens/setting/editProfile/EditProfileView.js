//import liraries
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Platform
} from 'react-native';
import {connect} from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import IconFeather from 'react-native-vector-icons/Feather';
/* Common Styles & Functions */
import * as commonStyle from '../../../../theme/css/style';
import {Fonts, colors} from '../../../../theme/css/common';
import * as commonFunctions from '../../../../theme/js/CommonFunctions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-material-dropdown';
/* Set screen width */
const CANCEL_INDEX = 0;

const options = ['Cancel', 'Take a Photo', 'Take From Gallery'];
// const title = 'Which one do you like?';

// create a component
class EditProfileView extends Component {
  static navigationOptions = () => ({
    title: 'Edit Profile',
    tabBarLabel: null,
    gesturesEnabled: true,
    // header: null,
    // tabBarOptions: {
    //   activeTintColor: '#e91e63'
    // },
    headerTitleStyle: {
      fontFamily: Fonts.RobotoMedium,
      fontWeight: 'normal',
      fontSize: 18
    },
    // headerLeft: (
    //   <TouchableOpacity
    //     style={commonStyle.customBackButton}
    //     onPress={() => navigation.goBack()}
    //   >
    //     <Image
    //       style={[commonStyle.customBack, { marginLeft: Platform.OS === 'ios' ? 0 : 0 }]}
    //       source={require('../../../../../images/btnBack.png')}
    //     />
    //   </TouchableOpacity>
    // ),

    tabBarIcon: ({focused}) => (
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
    this.state = {
      pathProfile: '../../../../../images/profileImgae.jpeg',
      vehicalPath: '../../../../../images/pickupboxcar.jpg',
      pathLicense: '../../../../../images/profileImgae.jpeg',
      pathInsurance: '../../../../../images/pickupboxcar.jpg',
      pathRegistration: '../../../../../images/profileImgae.jpeg',

      states: '',
      vehicalType: '',
      vehicalMake: '',
      vehicalModel: '',
      statesArray: [{value: 'Gujarat'}, {value: 'Maharashtra'}, {value: 'Goa'}],
      vehicalTypeArray: [{value: 'Type 1'}, {value: 'Type 2'}, {value: 'Type 3'}],
      vehicalMakeArray: [{value: 'Make 1'}, {value: 'Make 2'}, {value: 'Make 3'}],
      vehicalModelArray: [{value: 'Model 1'}, {value: 'Model 2'}, {value: 'Model 3'}]
    };

    this.setUserProfile = this.setUserProfile.bind(this);
    this.setUserProfileCover = this.setUserProfileCover.bind(this);
    this.setDriverLicense = this.setDriverLicense.bind(this);
    this.setProofInsurance = this.setProofInsurance.bind(this);
    this.setVehicalRegistration = this.setVehicalRegistration.bind(this);

  }
  setUserProfile(i) {
    switch (i) {
      case 1:
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          this.setState({
            pathProfile: image.path
          });
        });

        break;
      case 2:
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log('path-->', image.path);
          console.log('sourceURL-->', image.sourceURL);
          this.setState({
            pathProfile: image.path
          });
        });
        break;
      default:
        break;
    }
  }
  setUserProfileCover(i) {
    switch (i) {
      case 1:
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          this.setState({
            vehicalPath: image.path
          });
        });

        break;
      case 2:
        ImagePicker.openPicker({
          width: 800,
          height: 200,
          cropping: true
        }).then(image => {
          console.log(image);
          console.log('path-->', image.path);
          console.log('sourceURL-->', image.sourceURL);
          this.setState({
            vehicalPath: image.path
          });
        });
        break;
      default:
        break;
    }
  }

  setDriverLicense(i) {
    switch (i) {
      case 1:
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          this.setState({
            pathLicense: image.path
          });
        });

        break;
      case 2:
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log('path-->', image.path);
          console.log('sourceURL-->', image.sourceURL);
          this.setState({
            pathLicense: image.path
          });
        });
        break;
      default:
        break;
    }
  }

  setProofInsurance(i) {
    switch (i) {
      case 1:
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          this.setState({
            pathInsurance: image.path
          });
        });

        break;
      case 2:
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log('path-->', image.path);
          console.log('sourceURL-->', image.sourceURL);
          this.setState({
            pathInsurance: image.path
          });
        });
        break;
      default:
        break;
    }
  }

  setVehicalRegistration(i) {
    switch (i) {
      case 1:
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          this.setState({
            pathRegistration: image.path
          });
        });

        break;
      case 2:
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log('path-->', image.path);
          console.log('sourceURL-->', image.sourceURL);
          this.setState({
            pathRegistration: image.path
          });
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={commonStyle.container}>
        <KeyboardAwareScrollView extraHeight={0}>
          <View style={[styles.topContainerView, {marginTop: 25}]}>
            <View style={[styles.wrapper, {}]}>
              <View style={styles.userProfile}>
                <TouchableOpacity
                  style={[styles.Imgcontainer]}
                  onPress={() => this.refs['setUserProfile'].show()}
                >
                  {this.state.pathProfile ===
                    '../../../../../images/profileImgae.jpeg' ? (
                      <View style={styles.backgroundContainer}>
                        <Image
                          style={
                            styles.backdrop
                          }
                          source={require('../../../../../images/profileImgae.jpeg')}
                        />
                      </View>
                    ) : (
                      <View style={styles.backgroundContainer}>
                        <Image
                          source={{uri: this.state.pathProfile}}
                          style={
                            styles.backdrop}
                        />
                      </View>
                    )}
                  <View style={styles.overlay}>
                    <IconFeather.Button
                      name='plus'
                      backgroundColor='transparent'
                      size={20}
                      borderRadius={3}
                      padding={0}
                      height={30}
                      width={40}
                      marginRight={-10}
                      justifyContent='center'
                      onPress={() => this.refs['setUserProfile'].show()}
                    />
                  </View>
                </TouchableOpacity>
                <ActionSheet
                  ref='setUserProfile'
                  // title={}
                  options={options}
                  cancelButtonIndex={CANCEL_INDEX}
                  onPress={this.setUserProfile}
                />
              </View>
              <View style={styles.userProfilePic}>
                <TouchableOpacity
                  style={[styles.Imgcontainer]}
                  onPress={() => {
                    this.refs['setUserProfileCover'].show();
                    console.log(this.state.vehicalArray);
                  }}
                >
                  {this.state.vehicalPath ===
                    '../../../../../images/pickupboxcar.jpg' ? (
                      <View style={styles.backgroundContainer}>
                        <Image
                          style={
                            styles.backdrop}
                          source={require('../../../../../images/pickupboxcar.jpg')}
                        />
                      </View>
                    ) : (
                      <View style={styles.backgroundContainer}>
                        <Image
                          source={{uri: this.state.vehicalPath}}
                          style={
                            styles.backdrop}
                        />
                      </View>
                    )}
                  <View style={styles.overlay}>
                    <IconFeather.Button
                      name='plus'
                      backgroundColor='transparent'
                      size={20}
                      borderRadius={3}
                      padding={0}
                      height={30}
                      width={40}
                      marginRight={-10}
                      justifyContent='center'
                      onPress={() => {
                        this.refs['setUserProfileCover'].show();
                      }}
                    />
                  </View>
                </TouchableOpacity>
                <ActionSheet
                  ref='setUserProfileCover'
                  // title={}
                  options={options}
                  cancelButtonIndex={CANCEL_INDEX}
                  onPress={this.setUserProfileCover}
                />
              </View>
            </View>

            <View style={[commonStyle.container, styles.userInputContainer, {}]}>
              {/* Username input */}
              <View style={styles.horizontal}>
                {/* <IconFeather.Button
                  name='user'
                  iconStyle={styles.icons}
                  backgroundColor='transparent'
                  size={22}
                  color='#000'
                /> */}
                <View style={{justifyContent: 'center'}}>
                  <Image style={[commonStyle.icons, {marginRight: 10}]} source={require('../../../../../images/user.png')} />
                </View>
                <View style={[styles.textInputView, {}]}>
                  {/* Create textfiled for enter user name */}

                  <TextInput
                    ref='userName'
                    style={
                      [styles.textInput]}
                    autoCapitalize='none'
                    // onChangeText={loginUser => this.setState({loginUser})}
                    placeholder='Username'
                    // value={this.state.loginUser}
                    returnKeyType='next'
                    underlineColorAndroid='#D3D3D3'
                    onSubmitEditing={() => this.refs.userEmail.focus()}
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
              {/* Email input */}
              <View style={[styles.horizontal]}>
                <View style={{justifyContent: 'center'}}>
                  <Image style={[commonStyle.icons, {marginRight: 10}]} source={require('../../../../../images/mail.png')} />
                </View>
                <View style={styles.textInputView}>
                  {/* Create textfiled for enter user name */}

                  <TextInput
                    style={
                      styles.textInput}
                    ref='userEmail'
                    autoCapitalize='none'
                    // onChangeText={loginUser => this.setState({loginUser})}
                    placeholder='Email'
                    // value={this.state.loginUser}
                    returnKeyType='next'
                    underlineColorAndroid='#D3D3D3'
                    onSubmitEditing={() => this.refs.userPhone.focus()}
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
              {/* Phone input */}
              <View style={styles.horizontal}>
                <View style={{justifyContent: 'center'}}>
                  <Image style={[commonStyle.icons, {marginRight: 10}]} source={require('../../../../../images/phoneBlack.png')} />
                </View>
                <View style={[styles.textInputView, {}]}>
                  {/* Create textfiled for enter user name */}

                  <TextInput
                    style={
                      styles.textInput}
                    ref='userPhone'
                    autoCapitalize='none'
                    // onChangeText={loginUser => this.setState({loginUser})}
                    placeholder='Phone'
                    // value={this.state.loginUser}
                    returnKeyType='next'
                    underlineColorAndroid='#D3D3D3'
                    onSubmitEditing={() => this.refs.userCity.focus()}
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
              {/* City input */}
              <View style={styles.horizontal}>
                <View style={{justifyContent: 'center'}}>
                  <Image style={[commonStyle.icons, {marginRight: 14}]} source={require('../../../../../images/global.png')} />
                </View>
                <View style={[styles.textInputView, {}]}>
                  {/* Create textfiled for enter user name */}

                  <TextInput
                    style={[styles.textInput, {}]}
                    ref='userCity'
                    autoCapitalize='none'
                    // onChangeText={loginUser => this.setState({loginUser})}
                    placeholder='City'
                    // value={this.state.loginUser}
                    returnKeyType='next'
                    underlineColorAndroid='#D3D3D3'
                    onSubmitEditing={() => this.refs.userState.focus()}
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
              <View style={styles.horizontal}>
                <View style={[styles.textInputView, {}]}>
                  <Dropdown
                    label='State'
                    data={this.state.statesArray}
                    value={this.state.states}
                    textColor='rgba(0, 0, 0, 1.0)'
                    fontSize={15}
                    animationDuration={175}
                    containerStyle={{
                      // backgroundColor: 'blue',
                      width: commonFunctions.screenWidth(100, 0),
                      paddingLeft: 5,
                      marginTop: -17,
                      marginLeft: 30
                    }}
                    onChangeText={value => this.setState({states: value})}
                  />
                </View>
              </View>
              <View style={[styles.horizontal]}>
                <View style={{justifyContent: 'center'}}>
                  <Image style={[commonStyle.icons, {marginRight: 10}]} source={require('../../../../../images/truck.png')} />
                </View>
                <View style={[styles.textInputView, {}]}>
                  <Dropdown
                    label='Type of Vehical'
                    data={this.state.vehicalTypeArray}
                    value={this.state.vehicalType}
                    textColor='rgba(0, 0, 0, 1.0)'
                    fontSize={15}
                    animationDuration={175}
                    containerStyle={{
                      // backgroundColor: 'pink',
                      width: commonFunctions.screenWidth(100, 0),
                      paddingLeft: 5,
                      marginTop: -11
                    }}
                    onChangeText={value => this.setState({vehicalType: value})}
                  />
                </View>
              </View>
              <View style={styles.horizontal}>
                <View style={styles.textInputView}>
                  <Dropdown
                    label='Vehical make'
                    data={this.state.vehicalMakeArray}
                    value={this.state.vehicalMake}
                    textColor='rgba(0, 0, 0, 1.0)'
                    fontSize={15}
                    animationDuration={175}
                    containerStyle={{
                      width: commonFunctions.screenWidth(100, 0),
                      paddingLeft: 5,
                      marginTop: -17,
                      marginLeft: 30
                    }}
                    onChangeText={value => this.setState({vehicalMake: value})}
                  />
                </View>
              </View>
              <View style={styles.horizontal}>
                <View style={styles.textInputView}>
                  <Dropdown
                    label='Vehical model'
                    data={this.state.vehicalModelArray}
                    value={this.state.vehicalModel}
                    textColor='rgba(0, 0, 0, 1.0)'
                    fontSize={15}
                    animationDuration={175}
                    containerStyle={{
                      width: commonFunctions.screenWidth(100, 0),
                      paddingLeft: 5,
                      marginTop: -17,
                      marginLeft: 30
                    }}
                    onChangeText={value => this.setState({vehicalModel: value})}
                  />
                </View>
              </View>
              <View style={[styles.horizontal, {marginTop: 20}]}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Image style={[commonStyle.icons, {marginRight: 10}]} source={require('../../../../../images/document.png')} />
                </View>
                <View style={[styles.documentContainer, {marginLeft: 10}]}>
                  <View style={[styles.documentInnerContainer, {width: '85%', backgroundColor: 'skyblue'}]}>
                    <View style={[styles.documentHeaderWrapper, {}]}>
                      <Text style={[styles.headline, {}]}>Drivers License</Text>
                    </View>
                    <View style={styles.documentImageWrapper}>
                      {this.state.pathLicense === ''
                        ? (
                          <View style={styles.documentOverlayText}>
                            <Text style={[styles.headline, {fontSize: 18, color: colors.colorWhite}]}>Documents Approval Pending</Text>
                          </View>
                        ) : (
                          <Image style={[styles.vehicalInfoImages, {resizeMode: 'cover', borderBottomLeftRadius: 7, borderBottomRightRadius: 7}]} source={{uri: this.state.pathLicense}} />
                        )}
                    </View>
                    <View style={[styles.overlay, {borderBottomRightRadius: 7}]}>
                      <TouchableOpacity style={{padding: 7}} onPress={() => { this.refs['setDriverLicense'].show(); }}>
                        <Image style={[commonStyle.icons, {marginRight: 0}]} source={require('../../../../../images/camera.png')} />
                      </TouchableOpacity>
                      <ActionSheet
                        ref='setDriverLicense'
                        // title={}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        onPress={this.setDriverLicense}
                      />
                    </View>
                  </View>
                  <View style={[styles.documentInnerContainer, {width: '85%', backgroundColor: 'powderblue'}]}>
                    <View style={[styles.documentHeaderWrapper, {}]}>
                      <Text style={[styles.headline, {}]}>Proof of Insurance</Text>
                    </View>
                    <View style={styles.documentImageWrapper}>
                      {this.state.pathLicense === ''
                        ? (
                          <View style={styles.documentOverlayText}>
                            <Text style={[styles.headline, {fontSize: 18, color: colors.colorWhite}]}>Documents Approval Pending</Text>
                          </View>
                        ) : (
                          <Image style={[styles.vehicalInfoImages, {resizeMode: 'cover', borderBottomLeftRadius: 7, borderBottomRightRadius: 7}]} source={{uri: this.state.pathInsurance}} />
                        )}
                    </View>
                    <View style={[styles.overlay, {borderBottomRightRadius: 7}]}>
                      <TouchableOpacity style={{padding: 7}} onPress={() => { this.refs['setProofInsurance'].show(); }}>
                        <Image style={[commonStyle.icons, {marginRight: 0}]} source={require('../../../../../images/camera.png')} />
                      </TouchableOpacity>
                      <ActionSheet
                        ref='setProofInsurance'
                        // title={}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        onPress={this.setProofInsurance}
                      />
                    </View>
                  </View>
                  <View style={[styles.documentInnerContainer, {width: '85%', backgroundColor: 'steelblue'}]}>
                    <View style={[styles.documentHeaderWrapper, {}]}>
                      <Text style={[styles.headline, {}]}>Vehical Registration</Text>
                    </View>
                    <View style={styles.documentImageWrapper}>
                      {this.state.pathLicense === ''
                        ? (
                          <View style={styles.documentOverlayText}>
                            <Text style={[styles.headline, {fontSize: 18, color: colors.colorWhite}]}>Documents Approval Pending</Text>
                          </View>
                        ) : (
                          <Image style={[styles.vehicalInfoImages, {resizeMode: 'cover', borderBottomLeftRadius: 7, borderBottomRightRadius: 7}]} source={{uri: this.state.pathRegistration}} />
                        )}
                    </View>
                    <View style={[styles.overlay, {borderBottomRightRadius: 7}]}>
                      <TouchableOpacity style={{padding: 7}} onPress={() => { this.refs['setVehicalRegistration'].show(); }}>
                        <Image style={[commonStyle.icons, {marginRight: 0}]} source={require('../../../../../images/camera.png')} />
                      </TouchableOpacity>
                      <ActionSheet
                        ref='setVehicalRegistration'
                        // title={}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        onPress={this.setVehicalRegistration}
                      />
                    </View>
                  </View>
                  {/* <View style={{ width: commonFunctions.screenWidth(70, 0), height: 80, backgroundColor: 'powderblue', marginBottom: 10, borderRadius: 7 }}>
                    <View style={[styles.textOverlay, { borderTopLeftRadius: 7, borderTopRightRadius: 7 }]}>
                      <Text style={styles.headline}>Drivers License</Text>
                    </View>
                    {this.state.pathLicense === ''
                      ? (
                        <View style={styles.vehicalInfoContainer} />
                      ) : (
                        <View style={styles.vehicalInfoContainer}>
                          <Image
                            source={{ uri: this.state.pathLicense }}
                            style={
                              styles.vehicalInfoImages}
                          />
                        </View>
                      )}
                    <View style={[styles.overlay, { borderBottomRightRadius: 7 }]}>
                      <TouchableOpacity style={{ padding: 7 }} onPress={() => { this.refs['setDriverLicense'].show(); }}>
                        <Image style={[commonStyle.icons, { marginRight: 0 }]} source={require('../../../../../images/camera.png')} />
                      </TouchableOpacity>
                      <ActionSheet
                        ref='setDriverLicense'
                        // title={}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        onPress={this.setDriverLicense}
                      />
                    </View>
                  </View> */}
                  {/* <View style={{ width: commonFunctions.screenWidth(70, 0), height: 80, backgroundColor: 'skyblue', marginBottom: 10, borderRadius: 7 }} >
                    <View style={[styles.textOverlay, { borderTopLeftRadius: 7, borderTopRightRadius: 7 }]}>
                      <Text style={styles.headline}>Proof of Insurance</Text>
                    </View>
                    {this.state.pathInsurance === ''
                      ? (
                        <View style={styles.vehicalInfoContainer} />
                      ) : (
                        <View style={styles.vehicalInfoContainer}>
                          <Image
                            source={{ uri: this.state.pathInsurance }}
                            style={
                              styles.vehicalInfoImages}
                          />
                        </View>
                      )}
                    <View style={[styles.overlay, { borderBottomRightRadius: 7 }]}>
                      <TouchableOpacity style={{ padding: 7 }} onPress={() => { this.refs['setProofInsurance'].show(); }}>
                        <Image style={[commonStyle.icons, { marginRight: 0 }]} source={require('../../../../../images/camera.png')} />
                      </TouchableOpacity>
                      <ActionSheet
                        ref='setProofInsurance'
                        // title={}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        onPress={this.setProofInsurance}
                      />
                    </View>
                  </View> */}
                  {/* <View style={{ width: commonFunctions.screenWidth(70, 0), height: 80, backgroundColor: 'steelblue', borderRadius: 7 }} >
                    <View style={[styles.textOverlay, { borderTopLeftRadius: 7, borderTopRightRadius: 7 }]}>
                      <Text style={styles.headline}>Vehical Registration</Text>
                    </View>
                    {this.state.pathRegistration === ''
                      ? (
                        <View style={styles.vehicalInfoContainer}>
                          <Text style={{ flex: 1, width: 200, height: 20, backgroundColor: 'red' }}>Document Aproval Pending</Text>
                        </View>
                      ) : (
                        <View style={styles.vehicalInfoContainer}>
                          <Image
                            source={{ uri: this.state.pathRegistration }}
                            style={
                              styles.vehicalInfoImages}
                          />
                        </View>
                      )}
                    <View style={[styles.overlay, { borderBottomRightRadius: 7 }]}>
                      <TouchableOpacity style={{ padding: 7 }} onPress={() => { this.refs['setVehicalRegistration'].show(); }}>
                        <Image style={[commonStyle.icons, { marginRight: 0 }]} source={require('../../../../../images/camera.png')} />
                      </TouchableOpacity>
                      <ActionSheet
                        ref='setVehicalRegistration'
                        // title={}
                        options={options}
                        cancelButtonIndex={CANCEL_INDEX}
                        onPress={this.setVehicalRegistration}
                      />
                    </View>
                  </View> */}
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink, {marginTop: 50}]}
            onPress={() => {
              this.validateInput();
            }}
          >
            <Text style={styles.textLogin}>Submit</Text>
          </TouchableOpacity>
          {/* <View>
            <Text
              style={styles.viewBottom}
            >
              {AllTexts.SignInBottomText}{' '}
              <Text
                style={[
                  commonStyle.headerText,
                  styles.textBottom
                ]}
              >
                {AllTexts.TermsConditionText}
              </Text>
            </Text>
          </View> */}
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF'
  },
  topContainerView: {
    flex: 1,
    margin: Platform.OS === 'ios' ? 10 : 15
  },
  userInputContainer: {
    justifyContent: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: Platform.OS === 'ios' ? 0 : 15,
    flex: 0
  },
  headline: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.RobotoMedium,
    color: 'white'
  },
  documentContainer: {
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 5
  },
  horizontal: {
    flexDirection: 'row',
    // marginLeft: 10,
    // marginRight: 10,
    width: commonFunctions.screenWidth(94, 0)
  },
  textLogin: {
    fontSize: 16,
    fontFamily: Fonts.RobotoMedium,
    color: 'white'
  },
  Imgcontainer: {
    flex: 1,
    alignItems: 'center'
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover', width: '100%', height: '100%'
  },
  vehicalInfoImages: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover', width: '100%', height: '100%',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    // borderWidth: 2,
    borderColor: 'transparent'
  },
  vehicalInfoContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    // opacity: 1.0,
    marginTop: 19,
    overflow: 'hidden'
  },
  overlay: {
    opacity: 1,
    bottom: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: '#F02948',
    borderTopLeftRadius: 7,
    padding: 0, margin: 0
  },
  textOverlay: {
    opacity: 1,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#F02948',
    padding: 0, margin: 0
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 10,
    paddingLeft: commonFunctions.screenWidth(10.9, 0),
    paddingRight: commonFunctions.screenWidth(10.9, 0),
    // paddingBottom: 10,
    height: 90
  },
  userProfile: {
    marginRight: 5,
    width: commonFunctions.screenWidth(21.9, 0),
    height: commonFunctions.screenWidth(21.9, 0),
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#F02948'
  },
  userProfilePic: {
    marginLeft: 5,
    width: commonFunctions.screenWidth(44.8, 0),
    height: commonFunctions.screenWidth(21.9, 0),
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#F02948'
    // backgroundColor: 'blue'
  },
  button: {
    width: 200,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#38f'
  },
  listInnerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  view: {
    marginLeft: 10,
    height: 50,
    width: 40
  },
  icons: {
    alignSelf: 'center',
    marginRight: 4,
    marginTop: 7
  },
  textInputView: {
    flexDirection: 'column',
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 14
      }
    }),
    ...Platform.select({
      android: {
        marginTop: 0
      }
    })
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
    //   fontFamily: Fonts.LatoRegular,
    justifyContent: 'center'
  },
  textInput: {
    fontFamily: Fonts.RootoRegular,
    width: commonFunctions.screenWidth(100, 0),
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
  },
  documentInnerContainer: {
    width: '70%',
    height: 80,
    backgroundColor: 'transparent',
    marginBottom: 10,
    borderRadius: 7
    // borderWidth: 1,
    // borderLeftWidth: 0,
    // borderBottomWidth: 0,
    // borderColor: '#242633',
    // borderTopWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 1,
    // shadowRadius: 7,
    // elevation: 1,
  },
  documentHeaderWrapper: {
    backgroundColor: '#F02948',
    height: '30%',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7
  },
  documentImageWrapper: {
    position: 'relative',
    height: '70%',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  documentOverlayText: {
    position: 'absolute',
    opacity: 0.8,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#242633',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  }
});

//make this component available to the app
// export default EditProfileView;
export default connect()(EditProfileView);
