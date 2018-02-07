//import libraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
/* import common styles & functions */
import * as commonStyle from '../../../theme/css/style';
import * as commonFunctions from '../../../theme/js/CommonFunctions';
/* react navigation */
import {connect} from 'react-redux';
import IconFeather from 'react-native-vector-icons/Feather';
// import {screenHeight} from '../../../theme/js/CommonFunctions';

class ProfileView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    tabBarLabel: null,
    gesturesEnabled: true,
    headerLeft: (
      <TouchableOpacity
        style={commonStyle.customBackButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[commonStyle.customBack, {}]}
          source={require('../../../../images/btnBack.png')}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={commonStyle.customBackButton}
        onPress={() => navigation.navigate('EditProfileView')}
      >
        <Image
          style={[commonStyle.customBack, {}]}
          source={require('../../../../images/btnBack.png')}
        />
      </TouchableOpacity>
    )
  });
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.wrapper}>
            <View style={styles.coverContainer}>
              <Image
                source={require('../../../../images/pickupboxcar.jpg')}
                style={styles.coverImageContainer}
              />
            </View>
            <View style={styles.overlay}>
              <Image
                source={require('../../../../images/profileImgae.jpeg')}
                style={styles.profileImageContainer}
              />
            </View>
            <View style={styles.detailContainer}>
              {/* <View style={styles.profileInfoView} /> */}

              <View
                style={[commonStyle.bgColorWhite, styles.titleContainerView]}
              >
                <View
                  style={{
                    width: commonFunctions.screenWidth(27.9, 0),
                    marginLeft: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={styles.textTruck}>Truck</Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    marginLeft: 5,
                    marginTop: 3,
                    width: commonFunctions.screenWidth(72.1, 0)
                  }}
                >
                  <Text style={styles.textName}>Robert Rose</Text>
                  <Text style={styles.textCarType}>
                    Ford F1500
                  </Text>
                  <Text style={styles.textHeadings}>Deliveries 124</Text>
                </View>
              </View>

              <View style={styles.contactInfoView}>
                <View style={styles.textWrap}>
                  <Text style={styles.textLabel}>Contact Info</Text>
                </View>
                <View style={styles.contactInfoDetails}>
                  <View style={styles.contactNumber}>
                    <IconFeather.Button
                      name='phone'
                      iconStyle={styles.icons}
                      backgroundColor='transparent'
                      size={22}
                      padding={0}
                      height={30}
                      width={40}
                      marginRight={-5}
                      color='#F02948'
                    />
                    <Text style={{fontSize: 14, color: '#FFFFFF'}}>374-823-2343</Text>
                  </View>
                  <View style={styles.contactAddress}>
                    <IconFeather.Button
                      name='map'
                      iconStyle={styles.icons}
                      backgroundColor='transparent'
                      size={22}
                      padding={0}
                      height={30}
                      width={40}
                      marginRight={-5}
                      color='#F02948'
                    />
                    <Text style={{fontSize: 14, color: '#FFFFFF'}}>Citrus Springs, FL</Text>
                  </View>
                </View>
              </View>
              <View style={styles.DocumentsView}>
                <View style={styles.textWrap}>
                  <Text style={styles.textLabel}>Documents</Text>
                </View>
                <View style={styles.documentContainer}>
                  <View style={{width: commonFunctions.screenWidth(70, 0), height: 80, backgroundColor: 'powderblue', marginBottom: 10, borderRadius: 7}}>
                    <View style={[styles.textOverlay, {borderTopLeftRadius: 7, borderTopRightRadius: 7}]}>
                      <Text style={styles.headline}>Drivers License</Text>
                    </View>
                  </View>
                  <View style={{width: commonFunctions.screenWidth(70, 0), height: 80, backgroundColor: 'skyblue', marginBottom: 10, borderRadius: 7}} >
                    <View style={[styles.textOverlay, {borderTopLeftRadius: 7, borderTopRightRadius: 7}]}>
                      <Text style={styles.headline}>Proof of Insurance</Text>
                    </View>
                  </View>
                  <View style={{width: commonFunctions.screenWidth(70, 0), height: 80, backgroundColor: 'steelblue', borderRadius: 7}} >
                    <View style={[styles.textOverlay, {borderTopLeftRadius: 7, borderTopRightRadius: 7}]}>
                      <Text style={styles.headline}>Vehical Registration</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* <Text style={styles.textLabel}>Hello, I am Profile</Text> */}
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555555',
    position: 'relative'
  },
  wrapper: {
    backgroundColor: '#242633',
    flex: 1
    // position: 'relative'
  },
  coverContainer: {
    height: commonFunctions.screenHeight(30, 0),
    width: commonFunctions.screenWidth(100, 0),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#F02948',
    position: 'relative',
    alignItems: 'center'
  },
  detailContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
    backgroundColor: '#242633',
    // height: commonFunctions.screenHeight(70, 0),
    width: commonFunctions.screenWidth(100, 0)
  },
  coverImageContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'stretch'
  },
  profileImageContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'stretch'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    marginTop: commonFunctions.screenHeight(19.8, 0),
    marginLeft: 15,
    height: commonFunctions.screenHeight(16.5, 0),
    width: commonFunctions.screenWidth(26.6, 0),
    borderRadius: 5,
    position: 'absolute',
    borderColor: '#F02948',
    borderWidth: 3,
    backgroundColor: 'rgba(69,85,117,0.7)',
    zIndex: 1
  },
  profileInfoView: {
    height: commonFunctions.screenHeight(15, 0),
    backgroundColor: 'yellow',
    width: commonFunctions.screenWidth(100, 0)
  },
  contactInfoView: {
    height: commonFunctions.screenHeight(18, 0),
    // backgroundColor: 'green',#242633
    width: commonFunctions.screenWidth(100, 0)
  },
  DocumentsView: {
    height: commonFunctions.screenHeight(65, 0),
    // backgroundColor: 'blue',
    width: commonFunctions.screenWidth(100, 0)
  },
  textWrap: {
    // marginLeft: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    width: commonFunctions.screenWidth(25, 0),
    height: commonFunctions.screenHeight(4, 0),
    backgroundColor: '#FFFFFF',
    marginLeft: 15
  },
  textLabel: {
    // paddingLeft: 5,
    // paddingHorizontal: 2,
    // paddingVertical: 2,
    // paddingRight: 5,
    fontSize: 12,
    color: '#242633'
    // backgroundColor: '#FFFFFF'

    // color: '#FAFBFB',
    // padding: 2,
    // alignSelf: 'flex-start',
    // fontWeight: 'bold',
    // borderWidth: 2,
    // borderColor: 'white',
    // backgroundColor: 'transparent',
    // width: commonFunctions.screenWidth(26, 0),
    // textAlign: 'center',
    // borderRadius: 5

  },
  // chnages
  titleContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
    // alignItems: "center",
  },
  textName: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'flex-start'
    // fontWeight: 'bold'
  },
  textCarType: {
    fontSize: 20,
    color: '#EDEDEE',
    alignSelf: 'flex-start',
    fontWeight: 'normal'
  },
  textHeadings: {
    fontSize: 14,
    color: '#EDEDEE',
    alignSelf: 'flex-start',
    fontWeight: 'normal'
  },
  textTruck: {
    fontSize: 14,
    color: '#FAFBFB',
    padding: 2,
    alignSelf: 'flex-start',
    marginTop: 24,
    // justifyContent: 'center',
    // alignItems: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    width: commonFunctions.screenWidth(26, 0),
    textAlign: 'center',
    borderRadius: 5
  },
  contactInfoDetails: {
    flex: 1,
    flexDirection: 'row',
    height: commonFunctions.screenHeight(100, 0),
    width: commonFunctions.screenWidth(100, 0)
  },
  contactNumber: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: commonFunctions.screenWidth(50, 0)
  },
  contactAddress: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    width: commonFunctions.screenWidth(50, 0)
  },
  documentContainer: {
    marginTop: commonFunctions.screenHeight(3,0),
    // marginBottom: commonFunctions.screenHeight(3,0),
    alignItems: 'center',
    justifyContent: 'center'
  },
  headline: {
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  iconImgoverlay: {
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
  }
});

export default connect()(ProfileView);
