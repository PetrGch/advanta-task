import { connect } from 'react-redux';
import * as pageActions from '../redux/actions/index';
import Vote from '../components/modules/page/vote/Vote';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        data: state.getData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
};

const VotePage= connect(
    mapStateToProps,
    mapDispatchToProps
)(Vote);

export default VotePage;
