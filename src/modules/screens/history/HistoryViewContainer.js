import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import HistoryView from './HistoryView';
// import * as HomeViewScreenStateActions from './HomeScreenState';

export default connect(
  // state => ({}),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
      //    HomeScreenStateActions: bindActionCreators(HomeScreenStateActions, dispatch)
    };
  }
)(HistoryView);
