import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import ForgotView from './ForgotView';
// import * as HomeViewScreenStateActions from './HomeScreenState';

export default connect(
  // state => ({}),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
      //    HomeScreenStateActions: bindActionCreators(HomeScreenStateActions, dispatch)
    };
  }
)(ForgotView);
