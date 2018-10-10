import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import Summer from './Summer';
import store from '../store';
import './index.css';

class Panel extends Component {

    render() {
        const style = {
            'margin': '15px'
        }
        return(
            <div style={style}>
                <Counter info='first' />
                <Counter info='second' />
                <Counter info='third' />
                <br/>
                <Summer />
            </div>
        )
    }
}

class App extends Component {
    
    render() {
        return(
            <Provider store={store}>
                <Panel />
            </Provider>
        )
    }
}


export default App;