import React, { Component } from 'react';
import store from './../store';

function Summer({sum}) {
    return(
        <div>
            total : {sum}
        </div>
    )
}

class SummerContainer extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            sum: this.sum()
        }
    }

    sum() {
        let date = store.getState();
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
        store.subscribe(this.onChange);
    }

    render() {
        return(
            <Summer sum={this.state.sum} />
        )
    }
}

export default SummerContainer;