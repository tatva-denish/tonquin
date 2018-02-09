//import liraries
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import * as commonStyle from '../../../theme/css/style';
import { Fonts, colors } from '../../../theme/css/common';
import IconFeather from 'react-native-vector-icons/Feather';
// import * as commonFunctions from '../../../theme/js/CommonFunctions';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IncomingModalBox from '../../../components/models/IncomingDeliveryModelBox';

// create a component
class HomeView extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: 'Home',
    headerTitle: (
      <View style={{ alignItems: 'center', width: '100%', height: '55%', paddingLeft: 25, paddingRight: 10 }}>
        <Image style={{ width: '100%', height: '100%', marginLeft: 15, resizeMode: 'contain' }} source={require('../../../../images/logo-example.png')} />
      </View>
    ),
    // headerStyle: styles.HeaderContainer,
    tabBarLabel: null,
    gesturesEnabled: true,
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileView')}
      >
        <Image style={{ backgroundColor: 'transparent', height: 35, width: 35, marginRight: 7, borderRadius: 5 }} source={require('../../../../images/profileImgae.jpeg')} />
      </TouchableOpacity>
    ),
    tabBarIcon: ({ focused }) => (
      <View style={{ width: 24, height: 23 }}>
        <Image
          source={require('../../../../images/home.png')}
          style={{ tintColor: focused ? '#F13451' : '#2F313D', width: '100%', height: '100%' }}
        />
      </View>
    )
  });

  state = {
    isUpcomingClicked: false,
    isIncoming: false,
    incomingAction: '',
    isDriverAvailable: false
  }
  navigateBackPopToView() {
    this.props.navigation.goBack();
  }

  OnUpcomingclick() {
    if (this.state.isUpcomingClicked === false) {
      this.setState({ isUpcomingClicked: true });
    } else {
      this.setState({ isUpcomingClicked: false });
    }
  }
  // set to driver available for pickup & deliver
  onClickDriverIsAvailble() {
    if (this.state.isDriverAvailable === false) {
      this.setState({ isDriverAvailable: true });
    } else {
      this.setState({ isDriverAvailable: false });
    }
  }

  openIncomingModalBox(val) {
    this.setState({ isIncoming: val, incomingAction: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wrapper, {}]}>
          <View style={styles.topSection}>
            <View style={styles.topContainer}>
              <View style={styles.row_1}>
                <View style={styles.row_1_container}>
                  <View style={styles.commonColumnStyle}>
                    <Text style={styles.row_1_textStyle}>Earned Today</Text>
                  </View>
                  <View style={styles.commonColumnStyle}>
                    <Text style={styles.row_1_textStyle}>Hours Worked</Text>
                  </View>
                  <View style={styles.commonColumnStyle}>
                    <Text style={styles.row_1_textStyle}>Deliveries Compeleted</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.row_2, this.state.isDriverAvailable === false ? { backgroundColor: '#FFF' } : { backgroundColor: '#373A4C' }]}>
                <View style={styles.row_1_container}>
                  <View style={styles.commonColumnStyle} >
                    <Text style={[styles.row_2_textStyle, { color: '#13BD71' }]}>$269</Text>
                  </View>
                  <View style={styles.commonColumnStyle} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <Image style={[commonStyle.icons, this.state.isDriverAvailable === false ? { tintColor: '#000' } : { tintColor: '#FFF' }]} source={require('../../../../images/clock.png')} />
                      {/* <IconFeather.Button
                        name='clock'
                        iconStyle={[styles.icons]}
                        backgroundColor='transparent'
                        size={22}
                        padding={0}
                        margin={0}
                        color='#000'
                      /> */}
                      <Text style={[styles.row_2_textStyle, this.state.isDriverAvailable === false ? { color: '#000' } : { color: '#FFF' }]}>63</Text>
                    </View>
                  </View>
                  <View style={styles.commonColumnStyle} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                      <Image style={[commonStyle.icons, this.state.isDriverAvailable === false ? { tintColor: '#000' } : { tintColor: '#FFF' }]} source={require('../../../../images/totalDeliveries.png')} />
                      {/* <IconFeather.Button
                        name='package'
                        iconStyle={[styles.icons]}
                        backgroundColor='transparent'
                        size={22}
                        padding={0}
                        margin={0}
                        color='#000'
                      /> */}
                      <Text style={[styles.row_2_textStyle, this.state.isDriverAvailable === false ? { color: '#000' } : { color: '#FFF' }]}>4</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.row_3, this.state.isDriverAvailable === false ? { backgroundColor: '#FFF' } : { backgroundColor: '#373A4C' }]}>
                <View style={{ width: 255, height: 245, paddingTop: 5 }}>
                  {this.state.isDriverAvailable === false ?
                    <Image style={{ backgroundColor: 'transparent', height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../../../../images/driverAvailble.png')} />
                    :
                    <Image style={{ backgroundColor: 'transparent', height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../../../../images/driverUnavailable.png')} />
                  }
                </View>
              </View>
              <View style={[styles.row_4, this.state.isDriverAvailable === false ? { backgroundColor: '#FFF' } : { backgroundColor: '#373A4C' }]}>
                <TouchableOpacity style={[commonStyle.bgbutton, this.state.isDriverAvailable === false ? commonStyle.bgColorDarkPink : commonStyle.bgColorGreen]} onPress={() => { this.onClickDriverIsAvailble(); }}>
                  <Text style={{ fontSize: 16, color: 'white', fontFamily: Fonts.RobotoMedium }}>{this.state.isDriverAvailable === false ? 'Unavailable' : 'Available'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.bottomContainer}>
              <View style={styles.bottomCol1}>
                <View>
                  <Image style={commonStyle.icons} source={require('../../../../images/calendar.png')} />
                  {/* <IconFeather.Button
                    name='layers'
                    iconStyle={[styles.icons]}
                    backgroundColor='transparent'
                    size={22}
                    padding={0}
                    color='#FFF'
                  /> */}
                  <Text style={styles.overlayBadge}>4</Text>
                </View>
                <Text style={{ fontSize: 14, color: 'white', fontFamily: Fonts.RobotoRegular }}>Upcoming</Text>
              </View>
              <View style={styles.bottomCol2}>
                <TouchableOpacity>
                  <IconFeather.Button
                    name='chevron-down'
                    iconStyle={[styles.icons]}
                    backgroundColor='transparent'
                    size={22}
                    padding={0}
                    marginRight={-10}
                    color='#FFF'
                    onPress={() => this.OnUpcomingclick()}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {this.state.isUpcomingClicked ? (
          <View style={styles.overlay}>
            <View style={styles.bottomSection}>
              <View style={styles.bottomContainer}>
                <View style={styles.bottomCol1}>
                  <View style={styles.iconContainer}>
                    <Image style={commonStyle.icons} source={require('../../../../images/calendar.png')} />
                    {/* <IconFeather.Button
                      name='layers'
                      iconStyle={[styles.icons]}
                      backgroundColor='transparent'
                      size={22}
                      padding={0}
                      color='#FFF'
                    /> */}
                    <Text style={styles.overlayBadge}>4</Text>
                  </View>
                  <Text style={{ fontSize: 14, color: 'white', fontFamily: Fonts.RobotoRegular }}>Upcoming</Text>
                </View>
                <View style={styles.bottomCol2}>
                  <TouchableOpacity>
                    <IconFeather.Button
                      name='chevron-up'
                      iconStyle={[styles.icons]}
                      backgroundColor='transparent'
                      size={22}
                      padding={0}
                      marginRight={-10}
                      color='#FFF'
                      onPress={() => this.OnUpcomingclick()}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <KeyboardAwareScrollView extraHeight={0}>
              <View style={[styles.topSection]}>
                <View style={styles.topContainer}>
                  <TouchableOpacity style={styles.upcomingWrapper} onPress={() => { this.openIncomingModalBox(true); }}>
                    <View style={{ backgroundColor: 'transparent', width: '15%', alignItems: 'center' }}>
                      <View style={styles.textWrapper}>
                        <Text style={{ color: '#FFF', fontFamily: Fonts.RobotoMedium, fontSize: 14 }}>1</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite]}>
                        <Text style={{ color: '#FFF', fontSize: 14, fontFamily: Fonts.RobotoMedium }}>Pickup</Text>
                        <Text style={{ color: '#FFF', fontSize: 12, fontFamily: Fonts.RobotoMedium }}>Today <Text style={{color: '#FFF', fontSize: 12, fontFamily: Fonts.RobotoRegular}}>12:35 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>4227 S Salina St, Syracuse, NY</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.upcomingWrapper} onPress={() => { this.openIncomingModalBox(true); }}>
                    <View style={{ backgroundColor: 'transparent', width: '15%', alignItems: 'center' }}>
                      <View style={styles.textWrapper}>
                        <Text style={{ color: '#FFF', fontFamily: Fonts.RobotoMedium, fontSize: 14 }}>2</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite, { backgroundColor: '#FFFFFF' }]}>
                        <Text style={{ color: '#242633', fontSize: 14, fontFamily: Fonts.RobotoMedium }}>Delivery</Text>
                        <Text style={{ color: '#242633', fontSize: 12, fontFamily: Fonts.RobotoMedium }}>Today <Text style={{color: '#242633', fontSize: 12, fontFamily: Fonts.RobotoRegular}}>2:35 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>4227 S Salina St, Syracuse, NY</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.upcomingWrapper} onPress={() => { this.openIncomingModalBox(true); }}>
                    <View style={{ backgroundColor: 'transparent', width: '15%', alignItems: 'center' }}>
                      <View style={styles.textWrapper}>
                        <Text style={{ color: '#FFF', fontFamily: Fonts.RobotoMedium, fontSize: 14 }}>3</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite]}>
                        <Text style={{ color: '#FFF', fontSize: 14, fontFamily: Fonts.RobotoMedium }}>Pickup</Text>
                        <Text style={{ color: '#FFF', fontSize: 12, fontFamily: Fonts.RobotoMedium }}>Tomorrow <Text style={{color: '#FFF', fontSize: 12, fontFamily: Fonts.RobotoRegular}}>1:50 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>4227 S Salina St, Syracuse, NY</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.upcomingWrapper} onPress={() => { this.openIncomingModalBox(true); }}>
                    <View style={{ backgroundColor: 'transparent', width: '15%', alignItems: 'center' }}>
                      <View style={styles.textWrapper}>
                        <Text style={{ color: '#FFF', fontFamily: Fonts.RobotoMedium, fontSize: 14 }}>4</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite]}>
                        <Text style={{ color: '#FFF', fontSize: 14, fontFamily: Fonts.RobotoMedium }}>Pickup</Text>
                        <Text style={{ color: '#FFF', fontSize: 12, fontFamily: Fonts.RobotoMedium }}>Tomorrow <Text style={{color: '#FFF', fontSize: 12, fontFamily: Fonts.RobotoRegular}}>2:35 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 16, fontFamily: Fonts.RobotoRegular }}>4227 S Salina St, Syracuse, NY</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        ) : (
            <View />
          )}
        {/* Incoming Request Model */}
        <IncomingModalBox
          key={2}
          isOpen={this.state.isIncoming}
          startOpen={false}
          isDisabled={false}
          deliveryImage={'delivery'}
          headingText={'Incoming Delivery Request'}
          startingText={'RUSH'}
          travelTimeText={63}
          earnText={78}
          orderSize={'Small'}
          orderMeasurements={'10" X 20" / 2 lbs.'}
          pickupAddressLabel={'Advance Auto Parts'}
          pickupAddressText={'4227 S Salina St, Syracuse, NY'}
          deliveryAddressLabel={'Advance Auto Parts'}
          deliveryAddressText={'4227 S Salina St, Syracuse, NY'}
          btnOkText={'Accept'}
          btnCancelText={'Decline'}
          actionOk={() => this.openIncomingModalBox(false)}
          actionCancel={() => this.openIncomingModalBox(false)}
          actionRequestClose={() => this.openIncomingModalBox(false)}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  wrapper: {
    backgroundColor: 'yellow',
    position: 'relative'
  },
  upcomingWrapper: {
    flexDirection: 'row',
    marginTop: '4%',
    marginBottom: '4%',
    width: '100%'
  },
  overlay: {
    backgroundColor: '#242633',
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  topSection: {
    width: '100%',
    height: '90%'
  },
  topContainer: {
    height: '100%'
  },
  bottomSection: {
    width: '100%',
    height: '10%',
    backgroundColor: '#242633'
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bottomCol1: {
    width: '85%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%'
    // justifyContent: 'center'
  },
  bottomCol2: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // iconContainer: {
  //   height: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // upcommingTextContainer: {
  //   height: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  overlayBadge: {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: '#F02948',
    padding: 1,
    borderRadius: 50,
    width: 16,
    height: 16,
    color: '#FFFFFF',
    right: 7,
    top: -7,
    fontSize: 9,
    fontFamily: Fonts.RobotoMedium
  },
  row_1: {
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#242633'
  },
  row_2: {
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#FFFFFF'
  },
  row_3: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '63%',
    backgroundColor: '#FFFFFF'
  },
  row_4: {
    alignItems: 'center',
    height: '17%',
    backgroundColor: '#FFFFFF'
  },
  row_1_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    height: '100%'
  },
  commonColumnStyle: {
    width: '33.33%',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row_1_textStyle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: Fonts.RobotoMedium,
    textAlign: 'center'
  },
  row_2_textStyle: {
    color: '#242633',
    fontSize: 26,
    fontFamily: Fonts.RobotoMedium,
    textAlign: 'center',
  },
  icons: {
    alignSelf: 'center'
  },
  HeaderContainer: {
    alignSelf: 'center'
  },
  textWrapper: {
    padding: 3,
    borderRadius: 8,
    borderWidth: 2,
    width: 32,
    height: 32,
    borderColor: '#FFFFFF',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWrapperOverWrite: {
    flexDirection: 'row',
    backgroundColor: '#F02948',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 0
  }
});

//make this component available to the app export default HomeView;
export default connect()(HomeView);
