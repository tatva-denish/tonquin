import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import PickUpDeliveryInfoView from './PickUpDeliveryInfoView';
// import * as HomeViewScreenStateActions from './HomeScreenState';

export default connect(
  // state => ({
  // }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    //    HomeScreenStateActions: bindActionCreators(HomeScreenStateActions, dispatch)
    };
  }
)(PickUpDeliveryInfoView);
