import React, {Component} from 'react';
import Deck from './Deck';
class Decks extends Component {
    render(){
        const deckList = this.props.decks.map(deck => {
            return (
              <Deck
                  key={deck.id}
                  deck={deck}  
              />
            )
          });
        return (
          <div>
            {deckList}
          </div>
        )}
}
export default Decks;