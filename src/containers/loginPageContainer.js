import LoginPage from "~/pages/LoginPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from "~/redux/actions/authAction";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(LoginPage);
