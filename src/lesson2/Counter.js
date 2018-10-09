import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.state = {
            count: this.props.count
        }
    }

    handleAdd() {
        this.setState({
            count: this.state.count + 1
        },() => {
            this.props.changeSum(true);
        })
    }

    handleDel() {
        
        this.setState({
            count: this.state.count - 1
        },() => {
            this.props.changeSum(false);
        })
    }

    componentWillReceiveProps() {
        console.log(this.props.info + " willReceiveProps")  
    }

    componentWillMount() {
        console.log(this.props.info + " willMount")
    }

    componentDidMount() {
        console.log(this.props.info + " DidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.info !== this.props.info) || 
            (nextState.count !== this.state.count)
    }

    render() {
        const { info } = this.props;
        console.log(this.props.info + " render")
        return(
            <div className='panel'>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleDel}>-</button>
                <span> {info} : {this.state.count} </span>
            </div>
        )
    }
}

Counter.propTypes = {
    count: PropTypes.number,
    info: PropTypes.string.isRequired
}

Counter.defaultProps = {
    count: 0
}

export default Counter;