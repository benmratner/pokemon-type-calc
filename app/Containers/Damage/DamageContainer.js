import React, { PropTypes } from 'react'
import types from '../../data/types'
import {Damage} from '../../Components'

export class DamageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currDamage: 1,
            displayText: 'Please Select Types',
        }
    }

    _calculateDamage(offenseType, defenseType1, defenseType2){
        const offenseStrengths = types[offenseType].strengths

        const isType1Weak = !!(offenseStrengths.indexOf(defenseType1) > -1)
        const isType2Weak = !!(offenseStrengths.indexOf(defenseType2) > -1)

        const defenseType1Resists = types[defenseType1].resists
        const defenseType1Immunities = types[defenseType1].immunities

        const isType1Resist = !!(defenseType1Resists.indexOf(offenseType) > -1)
        const isType1Immune = !!(defenseType1Immunities.indexOf(offenseType) > -1)


        let isType2Resist = false;
        let isType2Immune = false;

        if (defenseType2){
            const defenseType2Resists = types[defenseType2].resists
            const defenseType2Immunities = types[defenseType2].immunities

            isType2Resist = !!(defenseType2Resists.indexOf(offenseType) > -1)
            isType2Immune = !!(defenseType2Immunities.indexOf(offenseType) > -1)

        }

        if (isType1Immune || isType2Immune){
            return 0
        } else {
            let damageCounter = 1
            if (isType1Weak){
                damageCounter *= 2
            }
            if (isType2Weak){
                damageCounter *= 2
            }
            if (isType1Resist){
                damageCounter *= 0.5
            }
            if (isType2Resist){
                damageCounter *= 0.5
            }
            if (damageCounter < 0.5){
                damageCounter = 0.5
            }
            return damageCounter
        }
    }

    _getDisplayText(damage){
        let newText = ''
        if (damage > 1) {
            return `${damage}X Damage. It's Super Effective!`
        } else if (damage === 0.5) {
            return `${damage}X Damage. It's Not Very Effective...`
        } else if (damage === 0) {
            return `${damage}X Damage. The attack had no effect...`
        } else {
            return `${damage}X Damage.`
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.offenseType && nextProps.defenseTypeOne){
            console.log(`${nextProps.offenseType} -> ${nextProps.defenseTypeOne}  ${nextProps.defenseTypeTwo || ''}`)
            const newDamage = this._calculateDamage(nextProps.offenseType, nextProps.defenseTypeOne, nextProps.defenseTypeTwo)
            const newText = this._getDisplayText(newDamage)
            this.setState({currDamage: newDamage, displayText: newText})
        } else {
            this.setState({currDamage: 1, displayText: 'Please Select Types'})
        }
    }
    
    render() {
        const displayText = this._getDisplayText()
        return (
            <div>
                <Damage
                    damage={this.state.currDamage}
                    displayText={this.state.displayText}
                    />
            </div>
        )
    }
}

export default DamageContainer