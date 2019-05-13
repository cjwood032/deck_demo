import React, {Component} from 'react';
import CardsContainer from '../containers/CardsContainer';
class Deck extends Component {
    render(){
        return (
            <CardsContainer cards={this.props.deck.cards}/>
        )}
}
export default Deck;