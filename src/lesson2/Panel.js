import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.changeSum = this.changeSum.bind(this);
        const initCount = [0,10,20];
        this.state = {
            counter:[
                { count: initCount[0], info: '第一个计数器' },
                { count: initCount[1], info: '第二个计数器' },
                { count: initCount[2], info: '第三个计数器' }
            ],
            sum: initCount.reduce((sum, item) => { return sum + item}, 0)
        }
    }

    changeSum(isAddBoolen) {
        this.setState({
            sum: isAddBoolen ? this.state.sum + 1 : this.state.sum - 1
        })
    }

    counterList(counters) {
        return counters.map((item, index) => {
            return (
                <Counter 
                    key={index}
                    count={item.count} 
                    info={item.info} 
                    changeSum={this.changeSum} 
                />
            )
        })
    }

    render() {
        const counters = this.state.counter;
        return(
            <Fragment>
                { this.counterList(counters) }
                <div>计数器总和为{this.state.sum}</div>
                <div>
                    <button onClick={() => this.forceUpdate()}>刷新</button>
                </div>
            </Fragment>
        )
    }
}

export default Panel;