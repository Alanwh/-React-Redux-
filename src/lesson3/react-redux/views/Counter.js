import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../Actions';

function Counter({handleAdd, handleDel, info, count}) {
    return(
        <div>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleDel}>-</button>
            {info} counter {count}
        </div>
    )
}

Counter.propTypes = {
    handleAdd: PropTypes.func, 
    handleDel: PropTypes.func, 
    info: PropTypes.string, 
    count: PropTypes.number
}

const mapState = (state, ownProps) => {
    return {
        count: state[ownProps.info]
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        handleAdd() {
            dispatch(actions.add(ownProps.info));
        },
        handleDel() {
            dispatch(actions.del(ownProps.info));
        }
    }
}

export default connect(mapState, mapDispatch)(Counter);