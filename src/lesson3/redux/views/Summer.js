import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Summer({sum}) {
    return(
        <div>
            total : {sum}
        </div>
    )
}

class SummerContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.state = {
            sum: this.sum()
        }
    }

    sum() {
        let date = this.context.store.getState();
        let sum = 0;
        for(var key in date) {
            sum += date[key]
        }
        return sum;
    }

    onChange() {
        this.setState({
            sum: this.sum()
        })
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    render() {
        return(
            <Summer sum={this.state.sum} />
        )
    }
}

SummerContainer.contextTypes = {
    store: PropTypes.object
}

export default SummerContainer;