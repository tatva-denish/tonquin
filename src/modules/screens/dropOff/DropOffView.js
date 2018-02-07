//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
// import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import * as commonStyle from '../../../theme/css/style';
// import * as commonFunctions from '../../../theme/js/CommonFunctions';

class DropOffView extends Component {
  static navigationOptions = () => ({
    tabBarLabel: null,
    gesturesEnabled: true,
    header: null
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', height: '55%', alignItems: 'center', position: 'relative'}}>
          <Image
            source={require('../../../../images/stock-illustration.jpg')}
            style={{width: '100%', height: '100%', alignItems: 'center', position: 'absolute'}} />
          <View style={[commonStyle.bgColorDarkPink, styles.viewHorizontalBlock]}>
            <Text style={[styles.labelDesign]}>En Route to Delivery</Text>
          </View>
          <View style={[styles.viewHorizontalBlock, {paddingLeft: '12%', paddingRight: '12%', marginTop: '2%'}]}>
            <Text style={[styles.labelDesign, {fontSize: 24, textAlign: 'center', color: '#242633', fontWeight: '500', backgroundColor: 'transparent'}]}>4227 S Salina St, Syracuse, NY</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#242633', width: '100%', height: '7%'}} />
        <View style={{width: '100%', height: '38%'}}>
          <View style={[styles.viewHorizontalBlock, {marginTop: '2%'}]}>
            <Text style={[styles.labelDesign, {fontSize: 52, textAlign: 'center', color: '#242633'}]}>3:27 <Text style={[styles.labelDesign, {fontSize: 24, textAlign: 'center', color: '#242633'}]}>PM</Text></Text>
          </View>
          <View style={[commonStyle.bgColorDarkPink, styles.viewHorizontalBlock, {marginTop: 0, width: '75%', paddingTop: '1%', paddingBottom: '1%'}]}>
            <View style={styles.viewHorizontalBlock2}>
              <Text style={[styles.labelDesign, {fontSize: 24}]}>12<Text style={[styles.labelDesign, {fontSize: 18}]}> min </Text></Text>
              <Text style={[styles.labelDesign, {fontSize: 24}]}>14<Text style={[styles.labelDesign, {fontSize: 18}]}> mi </Text></Text>
            </View>
          </View>
          <View style={styles.mapsContainer}>
            <View style={styles.mapsIcon}>
              <Image
                source={require('../../../../images/google-maps.png')}
                style={{width: 50, height: 50, backgroundColor: 'transparent'}} />
              <Image
                source={require('../../../../images/waze.png')}
                style={{width: 50, height: 50, backgroundColor: 'transparent'}} />
              {/* <Text style={[styles.labelDesign, { fontSize: 24, color: 'black' }]}>12<Text style={[styles.labelDesign, { fontSize: 18, color: 'black' }]}> min </Text></Text>
              <Text style={[styles.labelDesign, { fontSize: 24, color: 'black' }]}>14<Text style={[styles.labelDesign, { fontSize: 18 , color: 'black'}]}> mi </Text></Text> */}
            </View>
          </View>
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
  viewHorizontalBlock2: {
    width: '75%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // marginTop: Platform.OS === 'ios' ? '10%' : '5%',
    // paddingTop: '2%',
    // paddingBottom: '2%'
  },
  labelDesign: {
    fontSize: 15,
    color: 'white'
  },
  mapsContainer: {
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  mapsIcon: {
    width: '55%',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default connect()(DropOffView);
