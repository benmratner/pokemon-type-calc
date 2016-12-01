import React, { PropTypes } from 'react'
import {container} from './styles.scss'
import {TypesContainer, DamageContainer} from '..'

export class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            offenseType: '',
            defenseType1: '',
            defenseType2: '',
        }
    }

    _updateDefenseTypes(type){
                let newType1 = ''
        let newType2 = ''
        if (type === this.state.defenseType2){                                          //if the type clicked is already stored in defenseType2, remove it 
            newType1 = this.state.defenseType1
            newType2 = ''
        } else if (type === this.state.defenseType1){                                   //if the type clicked is already stored in defenseType1, move defenseType2 to Type1 and clear Type2
            newType1 = this.state.defenseType2
            newType2 = ''
        } else {                                                                        //if the type clicked is not stored yet...
            if (this.state.defenseType2){                                               //if type2 exists, move it to type1 and store the new type in type2
                newType1 = this.state.defenseType2
                newType2 = type
            } else if (this.state.defenseType1){                                        // if only type1 exists, store the new type in type2
                newType1 = this.state.defenseType1
                newType2 = type
            } else {
                newType1 = type                                                         //otherwise, no type is clicked yet. store it in type1
            }

        }

        this.setState({defenseType1: newType1, defenseType2: newType2})
    }

    _updateOffenseTypes(type){
        if (type === this.state.offenseType){
            this.setState({offenseType: ''})
        } else {
            this.setState({offenseType: type})
        }
    }

    

    _offenseTypeClick(type, typeData){
        this._updateOffenseTypes(type)

    }
    _defenseTypeClick(type, typeData){
        this._updateDefenseTypes(type)        
    }

    render() {
        const selectedTypes = [this.state.defenseType1, this.state.defenseType2]
        return (
            <div className={container}>
                <TypesContainer 
                    role = {'Offense'}
                    titleText={'Attack Type'}
                    selectedTypes={this.state.offenseType}
                    onTypeClick={this._offenseTypeClick.bind(this)}
                    />
                <TypesContainer 
                    role={'Defense'}
                    titleText={'Pokémon Type(s)'}
                    selectedTypes={selectedTypes}
                    onTypeClick={this._defenseTypeClick.bind(this)}
                    />
                <DamageContainer 
                    offenseType={this.state.offenseType}
                    defenseTypeOne={this.state.defenseType1}
                    defenseTypeTwo={this.state.defenseType2}
                    />

            </div>
        )
    }
}

export default MainContainer