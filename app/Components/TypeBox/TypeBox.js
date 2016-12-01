import React, { PropTypes } from 'react'
import styles from './styles.scss'


export class TypeBox extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleTypeBoxClick(){
        this.props.onClick(this.props.type, this.props.typeData)
    }
    
    render() {
        const {type, typeData} = this.props
        const typeName = typeData.displayText
        const cssClass = `${type}Box`
        const isTypeSelected = (this.props.selected) ? 'Selected' : ''
        return (
            <div 
                className={styles[cssClass]}
                onClick={this._handleTypeBoxClick.bind(this)} 
                >
                    {typeName} {isTypeSelected}
            </div>
        )
    }
}

export default TypeBox