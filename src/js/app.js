import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header } from './header.jsx';

export default class Hello extends Component {
    render() {
        return (
                <div>
                  <Header/>
                    Hello future empower
                </div>
               );
    }
}
render(<Hello />, document.getElementById('app'));
