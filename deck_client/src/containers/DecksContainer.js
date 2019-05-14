import React, {Component} from 'react';
import Decks from '../components/Decks';
import { connect } from 'react-redux';
import {newDeck, fetchDecks} from '../actions/deckActions'
class DecksContainer extends React.Component {
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.newDeck()
    }
    render(){
        
        return (
            <div>
                <form className="newDeck" onSubmit={this.handleSubmit}>
                    <input type="submit" value="New Deck"/>
                </form>
                <Decks decks={this.props.decks}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
    decks: state.decks
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
    fetchDecks: () => dispatch(fetchDecks()),
    newDeck: () => dispatch(newDeck())}
  }
export default connect(mapStateToProps, mapDispatchToProps) (DecksContainer);