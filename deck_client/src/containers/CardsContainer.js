import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
class CardsContainer extends Component {
    render(){
        const cards = [{id:1, rank: "3", suit: "diamond"}, {id:1, rank: "K", suit: "spade"}, {id:1, rank: "A", suit: "club"}]
        const cardList = cards.map(card => {
            return (
              <Card
                  key={card.id}
                  card={card}  
              />
            )
          });
      
          return(
            <div className="grid-container" cols="5">
                {cardList}
            </div>
          );
        }
};
      

export default CardsContainer