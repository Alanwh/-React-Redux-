import React, { Component } from 'react';
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

class CounterContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.state = {
            count: this.context.store.getState()[this.props.info]
        }
    }

    onChange() {
        this.setState({
            count: this.context.store.getState()[this.props.info]
        })
    }

    handleAdd() {
        let { info } = this.props;
        this.context.store.dispatch(actions.add(info));
    }

    handleDel() {
        let { info } = this.props;
        this.context.store.dispatch(actions.del(info));
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.info !== this.props.info) || 
            (nextState.count !== this.state.count)
    }

    render() {
        return(
            <Counter 
                handleAdd={this.handleAdd}
                handleDel={this.handleDel}
                info={this.props.info}
                count={this.state.count}
            />
        )
    }
}

CounterContainer.defaultProps = {
    count: 0
}

CounterContainer.propTypes = {
    info: PropTypes.string.isRequired
}

CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer;