import { connect } from 'react-redux';

import AstCode from '../components/AstCode';

const mapStateToProps = state => state.code;

export default connect(mapStateToProps)(AstCode);
