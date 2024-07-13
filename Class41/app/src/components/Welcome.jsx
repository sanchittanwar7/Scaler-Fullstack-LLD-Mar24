import React from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props);        
    }
    render() {
        return (
            <div>
                <h1>Welcome to React, {this.props.name}</h1>
            </div>
        );
    }
}

export default Welcome;