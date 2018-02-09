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
      <Image style={{ backgroundColor: 'transparent', alignSelf: 'center', width: '45%', height: '70%', marginLeft: 15, resizeMode: 'contain' }} source={require('../../../../images/logo-example.png')} />
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
      <Image
        source={require('../../../../images/btnHome.png')}
        style={{ tintColor: focused ? '#F13451' : '#2F313D' }}
      />
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
              <View style={styles.row_2}>
                <View style={styles.row_1_container}>
                  <View style={styles.commonColumnStyle} >
                    <Text style={[styles.row_2_textStyle, { color: '#13BD71' }]}>$269</Text>
                  </View>
                  <View style={styles.commonColumnStyle} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <IconFeather.Button
                        name='clock'
                        iconStyle={[styles.icons]}
                        backgroundColor='transparent'
                        size={22}
                        padding={0}
                        margin={0}
                        color='#000'
                      />
                      <Text style={styles.row_2_textStyle}>63</Text>
                    </View>
                  </View>
                  <View style={styles.commonColumnStyle} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                      <IconFeather.Button
                        name='package'
                        iconStyle={[styles.icons]}
                        backgroundColor='transparent'
                        size={22}
                        padding={0}
                        margin={0}
                        color='#000'
                      />
                      <Text style={styles.row_2_textStyle}>4</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.row_3}>
                <Image style={{ backgroundColor: 'transparent', height: 245, width: 245 }} source={require('../../../../images/cardboard-box-icon.png')} />
              </View>
              <View style={styles.row_4}>
                <TouchableOpacity style={[commonStyle.bgbutton, this.props.isDriverAvailable ? commonStyle.bgColorGreen : commonStyle.bgColorDarkPink]} onPress={() => this.onClickDriverIsAvailble()}>
                  <Text style={{ fontSize: 16, color: 'white', fontWeight: '500' }}>Unavailable</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.bottomContainer}>
              <View style={styles.bottomCol1}>
                <View>
                  <IconFeather.Button
                    name='layers'
                    iconStyle={[styles.icons]}
                    backgroundColor='transparent'
                    size={22}
                    padding={0}
                    color='#FFF'
                  />
                  <Text style={styles.overlayBadge}>4</Text>
                </View>
                <Text style={{ fontSize: 14, color: 'white' }}>Upcoming</Text>
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
                    <IconFeather.Button
                      name='layers'
                      iconStyle={[styles.icons]}
                      backgroundColor='transparent'
                      size={22}
                      padding={0}
                      color='#FFF'
                    />
                    <Text style={styles.overlayBadge}>4</Text>
                  </View>
                  <Text style={{ fontSize: 14, color: 'white' }}>Upcoming</Text>
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
                        <Text style={{ color: '#FFF' }}>1</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite]}>
                        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 15 }}>Pickup</Text>
                        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 14 }}>Today <Text style={{ color: '#FFF', fontWeight: '400', fontSize: 14 }}>12:35 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '600' }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 18 }}>4227 S Salina St, Syracuse, NY</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.upcomingWrapper} onPress={() => { this.openIncomingModalBox(true); }}>
                    <View style={{ backgroundColor: 'transparent', width: '15%', alignItems: 'center' }}>
                      <View style={styles.textWrapper}>
                        <Text style={{ color: '#FFF' }}>2</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite, { backgroundColor: '#FFFFFF' }]}>
                        <Text style={{ color: '#242633', fontWeight: '600', fontSize: 15 }}>Delivery</Text>
                        <Text style={{ color: '#242633', fontWeight: '600', fontSize: 14 }}>Today <Text style={{ color: '#242633', fontWeight: '400', fontSize: 14 }}>12:35 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '600' }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 18 }}>4227 S Salina St, Syracuse, NY</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.upcomingWrapper} onPress={() => { this.openIncomingModalBox(true); }}>
                    <View style={{ backgroundColor: 'transparent', width: '15%', alignItems: 'center' }}>
                      <View style={styles.textWrapper}>
                        <Text style={{ color: '#FFF' }}>3</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite]}>
                        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 15 }}>Pickup</Text>
                        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 14 }}>Today <Text style={{ color: '#FFF', fontWeight: '400', fontSize: 14 }}>12:35 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '600' }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 18 }}>4227 S Salina St, Syracuse, NY</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.upcomingWrapper} onPress={() => { this.openIncomingModalBox(true); }}>
                    <View style={{ backgroundColor: 'transparent', width: '15%', alignItems: 'center' }}>
                      <View style={styles.textWrapper}>
                        <Text style={{ color: '#FFF' }}>4</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', width: '85%' }}>
                      <View style={[styles.textWrapper, styles.textWrapperOverWrite]}>
                        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 15 }}>Pickup</Text>
                        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 14 }}>Today <Text style={{ color: '#FFF', fontWeight: '400', fontSize: 14 }}>12:35 PM</Text></Text>
                      </View>
                      <View style={{ justifyContent: 'center', backgroundColor: 'transparent', width: '95%', paddingTop: '2%', paddingLeft: '8%' }}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '600' }}>Advance Auto Parts</Text>
                        <Text style={{ color: '#FFF', fontSize: 18 }}>4227 S Salina St, Syracuse, NY</Text>
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
    borderRadius: 50,
    width: 15,
    height: 15,
    color: '#FFFFFF',
    right: 5,
    top: -5,
    fontSize: 10
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
    justifyContent: 'center',
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
    width: '85%',
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
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  row_2_textStyle: {
    color: '#242633',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center'
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
