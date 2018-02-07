import React, {Component} from 'react';
import * as commonStyle from '../../theme/css/style';
// import Icon from 'react-native-vector-icons/Feather';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {StyleSheet, Image, View, Text, TouchableOpacity, Modal} from 'react-native';
// import * as commonFunction from '../../theme/js/CommonFunctions';
import PropTypes from 'prop-types';

class ModalBox extends Component {
  static propTypes = {
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    description: PropTypes.string,
    headingText: PropTypes.string,
    btnOkText: PropTypes.string,
    btnCancelText: PropTypes.string,
    actionOk: PropTypes.func,
    actionCancel: PropTypes.func,
    actionRequestClose: PropTypes.func,
    numberOfButton: PropTypes.number,
    deliveryImage: PropTypes.string,
    startingText: PropTypes.string,
    travelTimeText: PropTypes.number,
    earnText: PropTypes.number,
    orderSize: PropTypes.string,
    orderMeasurements: PropTypes.string,
    pickupAddressLabel: PropTypes.string,
    pickupAddressText: PropTypes.string,
    deliveryAddressLabel: PropTypes.string,
    deliveryAddressText: PropTypes.string
  };
  static defaultProps = {
    isDisabled: false,
    isOpen: false,
    startOpen: false
  }
  getImagePath(icon) {
    switch (icon) {
      case 'pickup':
        return require('../../../images/pickupbox1.png');
      case 'delivery':
        return require('../../theme/images/deliveryIcon.png');
      case 'success':
        return require('../../theme/images/deliveryIcon.png');
      default:
        return require('../../theme/images/deliveryIcon.png');
    }
  }
  setImage(modelImg) {
    return (
      <Image style={{height: 60, width: 60, alignSelf: 'flex-end'}} source={modelImg} />
    );
  }
  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.props.isOpen}
        onRequestClose={this.props.actionRequestClose}>
        <View style={[{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center', justifyContent: 'center'}]}>
          <TouchableOpacity style={[commonStyle.bgColorDarkPink, styles.viewHorizontalBlock, styles.pickupDeliveryBar, styles.modalHeader]}>
            <Text style={[styles.buttonText, {width: '100%',textAlign: 'center'}]}>{this.props.headingText}</Text>
          </TouchableOpacity>
          <View style={[styles.modal]}>

            <View style={[commonStyle.bgColorBlack, styles.viewHorizontalBlock, styles.dataSectionBar]}>
              <Text style={[styles.labelDesign]}>Starting</Text>
              <Text style={[styles.labelDesign]}>Travel Time</Text>
              <Text style={[styles.labelDesign]}>Earn</Text>
            </View>
            <View style={[styles.viewHorizontalBlock, styles.dataSectionBar]}>
              <Text style={[commonStyle.colorGreen, styles.topBarText]}>{this.props.startingText}</Text>
              <Text style={[styles.topBarText, {color: 'black'}]}>
                {this.props.travelTimeText}
                <Text style={{fontSize: 18, color: 'black', fontWeight: 'normal'}}> min</Text>
              </Text>
              <Text style={[commonStyle.colorGreen, styles.topBarText]}>${this.props.earnText}</Text>
            </View>
            <View style={styles.viewHorizontalBlock}>
              <View
                style={styles.horizontalLine}
              />
            </View>
            <View style={styles.orderSizeLabel}>
              <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}}>Order Size</Text>
            </View>
            <View style={[styles.viewHorizontalBlock, styles.deliverySection]}>
              <View style={{width: '40%', justifyContent: 'flex-end'}}>
                {this.setImage(this.getImagePath(this.props.deliveryImage))}
              </View>
              <View style={{width: '50%', paddingTop: 15}}>
                <Text style={[styles.addressStyle, {fontWeight: 'bold'}]}>{this.props.orderSize}</Text>
                <Text style={styles.addressStyle}>{this.props.orderMeasurements}</Text>
              </View>
            </View>
            <View style={[commonStyle.bgColorDarkPink, styles.viewHorizontalBlock, styles.pickupDeliveryBar]}>
              <Text style={[styles.labelDesign]}>Pickup Location</Text>
            </View>

            <View style={[styles.viewHorizontalBlock, styles.addressSectionStyle]}>
              <View style={{width: '100%'}}>
                <Text style={[styles.addressStyle, {fontWeight: 'bold'}]}>{this.props.pickupAddressLabel}</Text>
                <Text style={styles.addressStyle}>{this.props.pickupAddressText}</Text>
              </View>
            </View>

            <View style={[commonStyle.bgColorBlack, styles.viewHorizontalBlock, styles.pickupDeliveryBar]}>
              <Text style={[styles.labelDesign]}>Deliver Location</Text>
            </View>

            <View style={[styles.viewHorizontalBlock, styles.addressSectionStyle]}>
              <View style={{width: '100%'}}>
                <Text style={[styles.addressStyle, {fontWeight: 'bold'}]}>{this.props.deliveryAddressLabel}</Text>
                <Text style={styles.addressStyle}>{this.props.deliveryAddressText}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.viewHorizontalBlock, styles.dataSectionBar]}>
            <View style={{flex: 1, borderRadius: 8,width: '50%', borderWidth: 2, borderColor: '#E8284D'}}>
            <TouchableOpacity
              style={{borderRadius: 8}}
              onPress={
                this.props.actionOk
              }
            >
              <Text style={[commonStyle.bgColorDarkPink, styles.actionButtons, {borderRadius: 8}]}>{this.props.btnOkText}</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{width: '50%', borderRadius: 8}}
              onPress={
                this.props.actionCancel
              }
            >
              <Text style={styles.actionButtons}>{this.props.btnCancelText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    opacity: 1,
    borderRadius: 10,
    width: '90%',
    minHeight: '50%',
    zIndex: 9,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 5
  },
  modalHeader: {
    height: '7.5%',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '3%'
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  },
  labelDesign: {
    fontSize: 12,
    color: 'white'
  },
  viewHorizontalBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  actionButtons: {
    width: '100%',
    padding: '8%',
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  orderSizeLabel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%'
  },
  horizontalLine: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 2
  },
  pickupDeliveryBar: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    marginLeft: '3%',
    marginRight: '3%'
  },
  addressSectionStyle: {
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingTop: '3%',
    paddingBottom: '5%',
    marginLeft: '2%',
    marginRight: '2%'
  },
  addressStyle: {
    fontSize: 13,
    color: 'black',
    alignSelf: 'flex-start'
  },
  dataSectionBar: {
    paddingTop: '3.5%',
    paddingBottom: '3.5%'
  },
  topBarText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  deliverySection: {
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingTop: '1%',
    paddingBottom: '4%'
  }
});
module.exports = ModalBox;
