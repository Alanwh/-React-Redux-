import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../Actions';
import store from './../store';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.state = {
            count: store.getState()[this.props.info]
        }
    }

    onChange() {
        this.setState({
            count: store.getState()[this.props.info]
        })
    }

    handleAdd() {
        let { info } = this.props;
        store.dispatch(actions.add(info));
    }

    handleDel() {
        let { info } = this.props;
        store.dispatch(actions.del(info));
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.info !== this.props.info) || 
            (nextState.count !== this.state.count)
    }

    render() {
        return(
            <div>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleDel}>-</button>
                {this.props.info} counter {this.state.count}
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

Counter.propTypes = {
    info: PropTypes.string.isRequired
}

export default Counter;