import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
class CardsContainer extends Component {
    render(){
        const cardList = this.props.cards.map(card => {
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