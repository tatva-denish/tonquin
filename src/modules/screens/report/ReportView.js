//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import {NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';
import * as commonStyle from '../../../theme/css/style';

// create a component
class ReportView extends Component {
  static navigationOptions = () => ({
    tabBarLabel: null,
    gesturesEnabled: false,
    header: null,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    },
    tabBarIcon: ({ focused }) => (
      <View style={{ width: 24, height: 23 }}>
        <Image
          source={require('../../../../images/report.png')}
          style={{ tintColor: focused ? '#F13451' : '#2F313D', width: '100%', height: '100%' }}
        />
      </View>
      )
  });

  openPickUpView() {
    this.props.navigation.navigate('PickUpView');
  }
  openDropOffView() {
    this.props.navigation.navigate('DropOffView');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>Report View</Text>
        <TouchableOpacity
          style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink]}
          onPress={() => {
            this.openPickUpView();
          }}
        >
          <Text style={{ fontSize: 16, color: 'white' }}>Pick-Up View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink]}
          onPress={() => {
            this.openDropOffView();
          }}
        >
          <Text style={{ fontSize: 16, color: 'white' }}>Drop-Off View</Text>
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
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

//make this component available to the app
// export default ReportView;
export default connect()(ReportView);

