import React, { PropTypes } from 'react'
import {TypeBox} from '../../Components'
import types from '../../data/types'

export class TypesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    _checkSelectedType(type){
        if (this.props.role === 'Offense'){
            return (this.props.selectedTypes === type)
        } else /*if this.props.role === 'Defense' */{
            return (this.props.selectedTypes[0] === type || this.props.selectedTypes[1] === type)
        }

    }
    
    render() {

        return (
            <div className="defenseTypes col-md-3 ">
                <h1>{this.props.titleText}</h1>
                {Object.keys(types).map((type)=>{
                    const isTypeSelected = this._checkSelectedType(type)
                    return (
                        <TypeBox
                            key={type}
                            type={type}
                            typeData={types[type]}
                            onClick={this.props.onTypeClick}
                            selected = {isTypeSelected}
                            />
                    )
                })}
            </div>
        )
    }
}

export default TypesContainer