const React = require('react-native');
import {colors, Fonts} from './common';
import * as commonFunctions from '../js/CommonFunctions';
const {StyleSheet} = React;

module.exports = StyleSheet.create({
  colorWhite: {
    color: colors.colorWhite
  },
  colorGrey: {
    color: colors.colorGrey
  },
  colorGreen: {
    color: colors.colorGreen
  },
  textUnderlineColor: {
    color: colors.colorDodgerBlue
  },
  colorDarkPink: {
    color: colors.colorDarkPink
  },
  bgColorDarkPink: {
    backgroundColor: colors.colorDarkPink
  },
  bgColorBlack: {
    backgroundColor: colors.colorBlack
  },
  bgColorGreen: {
    backgroundColor: colors.colorGreen
  },
  bgColorWhite: {
    backgroundColor: colors.colorWhite
  },
  fontLatoHairline: {
    fontFamily: Fonts.LatoHairline
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  roundBlueBtn: {
    borderRadius: 12,
    backgroundColor: colors.colorBlue
  },
  roundLightBlueBtn: {
    borderRadius: 12,
    backgroundColor: colors.colorLightBlue
  },
  roundBigBlueBtn:
  {
    borderRadius: 18,
    backgroundColor: colors.colorBlue
  },
  roundGreenBtn: {
    borderRadius: 12,
    backgroundColor: colors.colorGreen
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignStart: {
    alignItems: 'flex-start'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
  modalcontainer: {
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
    fontSize: 16
  },
  modalTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  modalBackIcon: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    padding: 0,
    marginLeft: 10
  },
  modalLeftMargin: {
    marginLeft: 12
  },
  modalRightMargin: {
    marginRight: 12
  },
  modalSelectedIcon: {
    alignSelf: 'flex-end',
    height: 12.5,
    width: 20,
    marginRight: 10,
    justifyContent: 'center',
    marginTop: 16
  },
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite
  },
  headerText: {
    justifyContent: 'center',
    color: colors.colorDarkPink,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
    fontFamily: Fonts.LatoBold
  },
  bgbutton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    height: commonFunctions.screenHeight(8, 0),
    width: commonFunctions.screenWidth(62, 0),
    alignSelf: 'center',
    // marginLeft: commonFunctions.screenWidth(19, 0),
    // marginRight: commonFunctions.screenWidth(19, 0),
    bottom: 30,
    borderRadius: 8
  },
  customButton: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  customBackButton: {
    marginLeft: 5,
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customBack: {
    // marginLeft: 10,
    height: 22,
    width: 22
  }

});
