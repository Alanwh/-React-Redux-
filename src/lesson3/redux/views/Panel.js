import React, { Component } from 'react';
import Counter from './Counter';
import Summer from './Summer';
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

export default Panel;