import { connect } from 'react-redux';
import { srcCodeChange } from '../actions';

import SrcCode from '../components/SrcCode';

const mapStateToProps    = state => state.code;
const mapDispatchToProps = dispatch => ({
  onChange : srcCode => {
    dispatch(srcCodeChange(srcCode))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SrcCode);
