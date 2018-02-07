//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
// import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import * as commonStyle from '../../../theme/css/style';
// import * as commonFunctions from '../../../theme/js/CommonFunctions';

// create a component
class PickUpView extends Component {
  static navigationOptions = () => ({
    tabBarLabel: null,
    gesturesEnabled: true,
    header: null
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', height: '65%', alignItems: 'center', position: 'relative'}}>
          <Image
            source={require('../../../theme/images/background.jpg')}
            style={{width: '100%', height: '100%', alignItems: 'center', position: 'absolute'}} />
          <View style={[commonStyle.bgColorGreen, styles.viewHorizontalBlock]}>
            <Text style={[styles.labelDesign]}>Arrived at Pickup Location</Text>
          </View>
          <View style={[styles.viewHorizontalBlock, {paddingLeft: '12%', paddingRight: '12%', marginTop: '2%'}]}>
            <Text style={[styles.labelDesign, {fontSize: 24, textAlign: 'center', fontWeight: '500', backgroundColor: 'transparent'}]}>4227 S Salina St, Syracuse, NY</Text>
          </View>
        </View>
        <View style={{width: '100%', height: '35%'}}>
          <View style={[styles.viewHorizontalBlock, {marginTop: '5%'}]}>
            <Text style={[styles.labelDesign, {fontSize: 30, textAlign: 'center', color: 'black'}]}>ARRIVED!</Text>
          </View>
          <TouchableOpacity style={[commonStyle.bgColorGreen, styles.viewHorizontalBlock, {width: '40%', marginTop: '1%', paddingTop: '4%', paddingBottom: '4%'}]}>
            <Text style={[styles.labelDesign]}>Pickup Details</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[commonStyle.bgbutton, commonStyle.bgColorGreen,
            { position: 'absolute', width: commonFunctions.screenWidth(45, 0), bottom:'30%' }]}
            onPress={() => {
              console.log('');
            }}
          >
            <Text style={{ fontSize: 16, color: 'white' }}>Pickup Details</Text>
          </TouchableOpacity> */}
        </View>
      </View >
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  viewHorizontalBlock: {
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: Platform.OS === 'ios' ? '10%' : '5%',
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  labelDesign: {
    fontSize: 15,
    color: 'white'
  }
});

//make this component available to the app
// export default PickUpView;
export default connect()(PickUpView);
