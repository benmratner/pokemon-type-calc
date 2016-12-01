import React, { PropTypes } from 'react'

export class Damage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {

    }
    
    render() {
        return (
            <div>
            <h3>{this.props.displayText}</h3>
            </div>
        )
    }
}

export default Damage