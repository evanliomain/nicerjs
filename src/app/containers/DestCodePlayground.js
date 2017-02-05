import { connect } from 'react-redux';

import DestCode from '../components/DestCode';

const mapStateToProps = state => state.code;

export default connect(mapStateToProps)(DestCode);
