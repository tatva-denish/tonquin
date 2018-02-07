import React, {Component} from 'react';
import * as commonStyle from '../../theme/css/style';
import Icon from 'react-native-vector-icons/Feather';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {StyleSheet, Image, View, Text, TouchableOpacity, Modal, Platform} from 'react-native';
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
    modalImage: PropTypes.string
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
      <Image style={{height: 150, width: 150}} source={modelImg} />
    );
  }
  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.props.isOpen}
        onRequestClose={this.props.actionRequestClose}>
        <View style={[{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}>
          <View style={[styles.modal]}>
            <TouchableOpacity
              style={[commonStyle.bgbutton, commonStyle.bgColorGreen, styles.modalHeader]}
              onPress={this.props.actionCancel}
            >
              <Text style={styles.buttonText}>{this.props.headingText}</Text>
              <View style={{right: 0, position: 'absolute'}}>
                <Icon.Button name='x' backgroundColor='transparent' size={25} padding={5} onPress={this.props.actionCancel} />
              </View>
              {/* <Text style={{ fontSize: 18, color: 'white', right:0, position:'absolute' }}>X</Text> */}
            </TouchableOpacity>
            <View style={[styles.centerContent, styles.cancelModal, (this.props.numberOfButton === 1 || this.props.numberOfButton === 2) ? {paddingTop: Platform.OS === 'android' ? '18%' : '8%'} : {paddingTop: '10%'}]}>
              {this.setImage(this.getImagePath(this.props.modalImage))}
              <Text style={[{fontSize: 18, color: 'black', textAlign: 'center', marginTop: 20}]}>{this.props.description}</Text>
              {this.props.numberOfButton === 1
                ? <TouchableOpacity
                  style={[commonStyle.bgbutton, commonStyle.bgColorGreen, {marginTop: '25%', height: 50, width: '90%'}]}
                  onPress={
                    this.props.actionOk
                  }
                >
                  <Text style={styles.buttonText}>{this.props.btnOkText}</Text>
                </TouchableOpacity>
                : null
              }
            </View>
            {this.props.numberOfButton === 2
              ? <View style={styles.okCancelBtn}>
              <TouchableOpacity
                  style={[commonStyle.bgbutton, commonStyle.bgColorGreen, styles.buttonStyle]}
                  onPress={
                    this.props.actionCancel
                  }
                >
                  <Text style={styles.buttonText}>{this.props.btnCancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[commonStyle.bgbutton, commonStyle.bgColorGreen, styles.buttonStyle]}
                  onPress={
                    this.props.actionOk
                  }
                >
                  <Text style={styles.buttonText}>{this.props.btnOkText}</Text>
                </TouchableOpacity>
              </View>
              : null
            }
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  okCancelBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelModal: {
    paddingLeft: '20%',
    paddingRight: '20%'
  },
  modal: {
    opacity: 1,
    borderRadius: 10,
    width: '90%',
    minHeight: '50%',
    zIndex: 9,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginTop: '20%',
    padding: 5
  },
  modalHeader: {
    marginTop: 0,
    height: 50,
    width: '100%',
    ...Platform.select({
      android: {
        position: 'absolute',
        top: 5
      },
      ios: {
        top: 0
      }
    })
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  buttonStyle: {
    marginTop: '20%',
    height: 50,
    width: '45%'
  }
});
module.exports = ModalBox;
