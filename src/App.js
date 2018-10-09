import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleCount = this.handleCount.bind(this);
        this.state = {
            count: 0
        }
    }

    handleCount() {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        const style = {
            'margin': '16px'
        }
        return(
            <div style={style}>
                <button onClick={this.handleCount}>点击</button>  
                <p>计数器：{ this.state.count }</p>    
            </div>
        )
    }
}

export default App;