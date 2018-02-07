//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import * as commonStyle from '../../../theme/css/style';
import * as commonFunctions from '../../../theme/js/CommonFunctions';
import IconFeather from 'react-native-vector-icons/Feather';

/* Start : Carousel Slider */
import Carousel from 'react-native-snap-carousel';
import {
  sliderWidth,
  itemWidth
} from '../../../theme/styles/SliderEntry.style';
import SliderEntry from '../../../components/SliderEntry';
import carouselStyles from '../../../theme/styles/index.style';
import {ENTRIES1} from '../../../static/entries';
// import {scrollInterpolators, animatedStyles} from '../../../utils/animations';
/* End : Carousel Slider  */
// import Carousel from "react-native-snap-carousel";
// import Image from 'react-native-image-progress';
import SignatureCapture from 'react-native-signature-capture';

// const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

// create a component
class PickUpDeliveryInfoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItem({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  saveSign() {
    this.refs['sign'].saveImage();
  }

  resetSign() {
    this.refs['sign'].resetImage();
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }
  mainExample() {
    // const {slider1ActiveSlide} = this.state;

    return (
      <View style={carouselStyles.exampleContainer}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.84}
          inactiveSlideOpacity={1}
          // inactiveSlideShift={20}
          containerCustomStyle={carouselStyles.slider}
          contentContainerCustomStyle={carouselStyles.sliderContentContainer}
          loop={false}
          loopClonesPerSide={0}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.setState({slider1ActiveSlide: index})}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={commonStyle.container}
      >
        <View style={styles.container}>
          <View style={[commonStyle.bgColorDarkPink, styles.textgbcolor]}>
            <Text style={styles.textTitle}>Pickup Location</Text>
          </View>
          <View style={[commonStyle.bgColorWhite, styles.titleContainerView]}>
            <View style={{width: '15%'}}>
              <IconFeather.Button
                name='map-pin'
                color='black'
                backgroundColor='transparent'
                size={20}
                borderRadius={3}
                alignSelf='flex-start'
                justifyContent='center'
              />
            </View>
            <View style={{width: '85%'}}>
              <Text style={styles.textHeadings}>Advance Auto Parts</Text>
              <Text style={styles.textSubtitles}>
                4227 S Salina St. Syracuse, Ny
              </Text>
            </View>
          </View>
          <View style={[commonStyle.bgColorWhite, styles.titleContainerView]}>
            <View style={{width: '15%'}}>
              <IconFeather.Button
                name='file-text'
                color='black'
                backgroundColor='transparent'
                size={20}
                borderRadius={3}
                alignSelf='flex-start'
                justifyContent='center'
              />
            </View>
            <View style={{width: '85%'}}>
              <Text style={styles.textHeadings}>Enter Code: 11232#</Text>
              <Text style={styles.textHeadings}>Package at front dest.</Text>
              <Text style={styles.textHeadings}>Ask for Lisa</Text>
            </View>
          </View>
          <View style={[commonStyle.bgColorBlack, styles.textgbcolor]}>
            <Text style={styles.textTitle}>Package Drtails</Text>
          </View>
          <View style={[commonStyle.bgColorWhite, styles.titleContainerView]}>
            <View style={{width: '15%'}}>
              <IconFeather.Button
                name='inbox'
                color='black'
                backgroundColor='transparent'
                size={20}
                borderRadius={3}
                alignSelf='flex-start'
                justifyContent='center'
              />
            </View>
            <View style={{width: '85%', justifyContent: 'center'}}>
              <Text style={styles.textHeadings}>Auto Folding Mirror</Text>
            </View>
          </View>
          <View style={[commonStyle.bgColorWhite, styles.titleContainerView]}>
            <View style={[commonStyle.bgColorBlack, styles.pobg]}>
              <Text style={[styles.textPOTitle]}>P.O. #</Text>
            </View>
            <View style={{width: '75%'}}>
              <Text style={styles.textPOSubtitles}>22322JKY54</Text>
            </View>
          </View>
          <View style={[commonStyle.bgColorWhite, styles.titleContainerView]}>
            <View style={[commonStyle.bgColorBlack, styles.pobg]}>
              <Text style={[styles.textPOTitle]}>Part #</Text>
            </View>
            <View style={{width: '75%'}}>
              <Text style={styles.textPOSubtitles}>PZ063-OK001</Text>
              <Text style={styles.textPOSubtitles}>PZ063-OK001</Text>
              <Text style={styles.textPOSubtitles}>PZ063-OK001</Text>
            </View>
          </View>
          <View style={{flex: 1, marginTop: 5}}>{this.mainExample()}</View>
          <View
            style={{height: 220, width: '100%', backgroundColor: '#242633'}}
          >
            <View style={{width: '100%', padding: 10, height: 300}}>
              <Text style={styles.textSignature}>Recipient's Signature</Text>
              <Text style={styles.textDrawSignature}>
                Draw singnature with your finger.
              </Text>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderColor: 'white',
                    borderWidth: 4,
                    borderRadius: 10,
                    marginTop: 10
                  }}
                >
                  <SignatureCapture
                    style={styles.signature}
                    ref='sign'
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={'portrait'}
                    showBorder={false}
                  />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  {/* <View style={{ flex: 1, flexDirection: "row", backgroundColor: 'yellow', height: 35 }}> */}
                  <TouchableHighlight
                    style={styles.buttonAccept}
                    onPress={() => {
                      this.saveSign();
                    }}
                  >
                    <Text style={{color: 'white'}}>Accept</Text>
                  </TouchableHighlight>
                  {/* </View>
                  <View style={{ flex: 1, flexDirection: "row", backgroundColor: 'yellow', height: 35 }}> */}
                  <TouchableHighlight
                    style={styles.buttonClear}
                    onPress={() => {
                      this.resetSign();
                    }}
                  >
                    <Text style={{color: 'white'}}>Clear</Text>
                  </TouchableHighlight>
                  {/* </View> */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'center'
    // backgroundColor: "#ffddff"
  },
  titleContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: "center",
    borderRadius: 8,
    padding: 10
  },
  textgbcolor: {
    // backgroundColor: "red",
    marginTop: 20,
    width: commonFunctions.screenWidth(92, 0),
    height: 30,
    paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 5
  },
  pobg: {
    width: '20%',
    height: 25,
    marginRight: 10,
    // paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 5
  },
  textTitle: {
    color: 'white',
    fontSize: 12
  },
  textPOTitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  },

  textHeadings: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start',
    fontWeight: 'bold'
  },
  textSubtitles: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start'
  },
  textSignature: {
    fontSize: 12,
    color: 'white',
    alignSelf: 'flex-start',
    fontWeight: 'bold'
  },
  textDrawSignature: {
    fontSize: 10,
    color: 'white',
    alignSelf: 'flex-start'
  },
  textPOSubtitles: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start',
    padding: 3
  },
  signature: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 8
  },
  buttonAccept: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#E8284D',
    marginRight: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonClear: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: 'transparent',
    marginLeft: 10,
    borderRadius: 5,
    marginTop: 10
  }
});

//make this component available to the app
// export default PickUpDeliveryInfoView;
export default connect()(PickUpDeliveryInfoView);
