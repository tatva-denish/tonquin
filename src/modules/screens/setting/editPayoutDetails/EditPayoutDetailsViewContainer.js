import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import EditPayoutDetailsView from './EditPayoutDetailsView';

export default connect(
  // state => ({
  // }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    };
  }
)(EditPayoutDetailsView);
