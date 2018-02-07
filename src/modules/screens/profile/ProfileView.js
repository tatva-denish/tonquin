//import libraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
/* import common styles & functions */
import * as commonStyle from '../../../theme/css/style';
import {colors, Fonts} from '../../../theme/css/common';
import * as commonFunctions from '../../../theme/js/CommonFunctions';
/* react navigation */
import {connect} from 'react-redux';
// import IconFeather from 'react-native-vector-icons/Feather';
// import {screenHeight} from '../../../theme/js/CommonFunctions';

class ProfileView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '',
    tabBarLabel: null,
    gesturesEnabled: true,
    headerStyle: {
      backgroundColor: colors.colorLightGray
    },
    headerRight: (
      <TouchableOpacity
        style={commonStyle.customBackButton}
        onPress={() => navigation.navigate('EditProfileView')}
      >
        <Image
          style={[commonStyle.customBack, {}]}
          source={require('../../../../images/Edit.png')}
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

              <View style={[styles.titleContainerView,{paddingTop: 5, paddingBottom: 5}]}>
                <View style={{marginLeft: 15,justifyContent: 'flex-end', marginBottom: 7}}>
                  <Text style={styles.textTruck}>Truck</Text>
                </View>
                <View style={{backgroundColor: 'transparent',marginLeft: 10,width: commonFunctions.screenWidth(72.1, 0)}}>
                  <Text style={styles.textName}>Robert Rose</Text>
                  <Text style={styles.textCarType}>
                    Ford F1500
                  </Text>
                  <Text style={styles.textHeadings}>Deliveries 124</Text>
                </View>
              </View>
              <View style={styles.contactInfoView}>
                <View style={styles.textWrap}>
                  <Text style={[commonStyle.commonText, {color: '#242633'}]}>Contact Info</Text>
                </View>
                <View style={styles.contactInfoDetails}>
                  <View style={styles.contactNumber}>
                    <Image style={commonStyle.icons} source={require('../../../../images/Phone.png')} />
                    <Text style={commonStyle.commonText}>374-823-2343</Text>
                  </View>
                  <View style={styles.contactAddress}>
                    <Image style={commonStyle.icons} source={require('../../../../images/Globe.png')} />
                    <Text style={commonStyle.commonText}>Citrus Springs, FL</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.DocumentsView, {}]}>
                <View style={[styles.textWrap, {marginTop: 0}]}>
                  <Text style={[commonStyle.commonText, {color: '#242633'}]}>Documents</Text>
                </View>
                <View style={styles.documentContainer}>
                  <View style={styles.documentInnerContainer}>
                    <View style={[styles.documentHeaderWrapper,{backgroundColor: colors.colorWhite}]}>
                      <Text style={[styles.headline,{color: '#292B38'}]}>Drivers License</Text>
                    </View>
                    <View style={styles.documentImageWrapper}>
                      <Image style={[styles.coverImageContainer, {resizeMode: 'cover', borderBottomLeftRadius: 7, borderBottomRightRadius: 7}]} source={require('../../../../images/pickupboxcar.jpg')} />
                      <View style={styles.documentOverlayText}>
                        <Text style={[styles.headline, {fontSize: 18, color: colors.colorWhite}]}>Documents Approval Pending</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.documentInnerContainer}>
                    <View style={styles.documentHeaderWrapper}>
                      <Text style={styles.headline}>Proof of Insurance</Text>
                    </View>
                    <View style={styles.documentImageWrapper}>
                      <Image style={[styles.coverImageContainer, {resizeMode: 'cover', borderBottomLeftRadius: 7, borderBottomRightRadius: 7}]} source={require('../../../../images/pickupboxcar.jpg')} />
                      {/* <View style={styles.documentOverlayText}>
                        <Text style={[styles.headline, { fontSize: 18, color: colors.colorWhite }]}>Documents Approval Pending</Text>
                      </View> */}
                    </View>
                  </View>
                  <View style={[styles.documentInnerContainer,{marginBottom: 0}]}>
                    <View style={styles.documentHeaderWrapper}>
                      <Text style={styles.headline}>Vehical Registration</Text>
                    </View>
                    <View style={styles.documentImageWrapper}>
                      <Image style={[styles.coverImageContainer, {resizeMode: 'cover', borderBottomLeftRadius: 7, borderBottomRightRadius: 7}]} source={require('../../../../images/pickupboxcar.jpg')} />
                      {/* <View style={styles.documentOverlayText}>
                        <Text style={[styles.headline, { fontSize: 18, color: colors.colorWhite }]}>Documents Approval Pending</Text>
                      </View> */}
                    </View>
                  </View>
                </View>
              </View>
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
    height: 120,
    width: '100%'
  },
  DocumentsView: {
    width: '100%'
  },
  textWrap: {
    // marginLeft: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    width: commonFunctions.screenWidth(26, 0),
    height: commonFunctions.screenHeight(4, 0),
    backgroundColor: '#FFFFFF',
    marginLeft: 15
  },
  textLabel: {
    fontSize: 12,
    color: '#242633'
  },
  // chnages
  titleContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    height: '15%'
  },
  textName: {
    color: 'white',
    alignSelf: 'flex-start',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 26
  },
  textCarType: {
    fontFamily: Fonts.RobotoLight,
    fontSize: 18,
    color: '#EDEDEE',
    alignSelf: 'flex-start'
  },
  textHeadings: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 14,
    color: '#EDEDEE',
    alignSelf: 'flex-start'
  },
  textTruck: {
    fontSize: 16,
    fontFamily: Fonts.RobotoBold,
    color: '#FAFBFB',
    padding: 2,
    alignSelf: 'center',
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
    alignSelf: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '85%'
  },
  contactNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  contactAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  documentContainer: {
    marginTop: '8%',
    marginBottom: '8%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headline: {
    fontSize: 16,
    fontFamily: Fonts.RobotoMedium,
    textAlign: 'center',
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
  documentInnerContainer: {
    width: '70%',
    height: 80,
    backgroundColor: 'transparent',
    marginBottom: 10,
    borderRadius: 7
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

export default connect()(ProfileView);
