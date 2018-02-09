import {Dimensions} from 'react-native';

export function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getKeyByValue(array, value) {
  for (let prop in array) {
    if (array.hasOwnProperty(prop)) {
      if (array[prop] === value)
      { return prop; }
    }
  }
  return null;
}

export function screenHeight(percentageHeight, offset) {
  return (Dimensions.get('window').height * (percentageHeight / 100)) - offset;
}
export function screenWidth(percentageWidth, offset) {
  return (Dimensions.get('window').width * (percentageWidth / 100)) - offset;
}

export function validateEmail(email) {
  const re = new RegExp(['^(([^<>()\\[\\]\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\.,;:\\s@"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])',
    '|(([a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜŸäëïöüŸ¡¿çÇŒœßØøÅåÆæÞþÐð:\\-0-9]+\\.)',
    '+[a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜŸäëïöüŸ¡¿çÇŒœßØøÅåÆæÞþÐð:]{2,}))$'].join(''));
  return re.test(email);
}

export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
