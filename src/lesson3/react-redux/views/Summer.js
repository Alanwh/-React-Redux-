import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Summer({sum}) {
    return(
        <div>
            total : {sum}
        </div>
    )
}

Summer.propTypes = {
    sum: PropTypes.number
}

const mapState = (state) => {
    let sum = 0;
    for(var key in state) {
        sum += state[key]
    }
    return {sum: sum}
}

export default connect(mapState)(Summer);