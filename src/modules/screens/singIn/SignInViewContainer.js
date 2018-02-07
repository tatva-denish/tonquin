import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignInView from './SignInView';
import {NavigationActions} from 'react-navigation';
// import * as LoginStateActions from './SignInState';

export default connect(
  // state => ({
  // isNotLoggedIn: state.getIn(['auth', 'isNotLoggedIn']), //Comming from SingIn propTypes declaration
  // loading: state.getIn(['auth', 'loading']), //Comming from SingIn propTypes declaration
  // errorMessage: state.getIn(['auth', 'errorMsg']),
  // invalideCredential: state.getIn(['auth', 'isWrongCredential']),
  // isConnected: state.getIn(['auth', 'isConnected']),
  // }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    //    LoginStateActions: bindActionCreators(LoginStateActions, dispatch)
    };
  }
)(SignInView);

