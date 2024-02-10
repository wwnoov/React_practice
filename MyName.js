import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        name: '남원우'
    }
    render() {
        return (
            <div>
                Hello! My Name is <b>{this.props.name}</b>.
            </div>
        )
    }
}

// MyName.defaultProps = {
//     name: '남원우'
// };

export default MyName;
