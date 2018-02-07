import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import ChangePasswordView from './ChangePasswordView';

export default connect(
  // state => ({
  // }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    };
  }
)(ChangePasswordView);
