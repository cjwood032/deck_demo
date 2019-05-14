import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardsContainer from '../containers/CardsContainer';
import {drawCards} from '../actions/deckActions'
class Deck extends Component {
    onClick = event =>{
        event.preventDefault()
        this.props.drawCards(this.props)
    }
    render(){
        return (
            <div>
                <button onClick={this.onClick}>Draw</button>
                <CardsContainer cards={this.props.cards}/>
            </div>
        )}
}
const mapStateToProps = (state) => {
    return({
    cards: state.cards
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
    
    drawCards: deck => dispatch(drawCards(deck))}
  }
export default connect(mapStateToProps, mapDispatchToProps) (Deck);
//<CardsContainer cards={this.props.deck.cards}/>