//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as commonStyle from '../../../theme/css/style';

// create a component
class HistoryView extends Component {
  static navigationOptions = () => ({
    tabBarLabel: null,
    gesturesEnabled: false,
    header: null,
    // tabBarOptions: {
    //   // activeTintColor: '#F13451',
    //   // inactiveTintColor: '#2F313D',
    //   // activeBackgroundColor: '#FFFFFF',
    //   // inactiveBackgroundColor: '#FFFFFF',
    // },
    tabBarIcon: ({focused}) => (
      <View style={{ width: 24, height: 23 }}>
        <Image
          source={require('../../../../images/pastDeliveries.png')}
          style={{ tintColor: focused ? '#F13451' : '#2F313D', width: '100%', height: '100%' }}
        />
      </View>
    )
  });

  openPickUpDeliveryView() {
    this.props.navigation.navigate('PickUpDeliveryInfoView');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>HistoryView</Text>
        <TouchableOpacity
          style={[commonStyle.bgbutton, commonStyle.bgColorDarkPink]}
          onPress={() => {
            this.openPickUpDeliveryView();
          }}
        >
          <Text style={{fontSize: 16, color: 'white'}}>Test</Text>
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
// export default HistoryView;
export default connect()(HistoryView);
