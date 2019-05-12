import React, {Component} from 'react';
import CardsContainer from './CardsContainer';
import { connect } from 'react-redux';
class DecksContainer extends Component {
    render(){
        return (
            <div>
                Deck it up!
                <button>new deck</button>
                <CardsContainer/>
            </div>
        )
    }
}
export default DecksContainer