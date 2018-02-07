import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import TermsNConditionsView from './TermsNConditionsView';

export default connect(
  // state => ({
  // }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    };
  }
)(TermsNConditionsView);
