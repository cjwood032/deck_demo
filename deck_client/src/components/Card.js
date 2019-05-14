import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Card.scss';
class Card extends Component {
    render(){
        const card = this.props.card
        let suit = "card card--" + card.suit 
        return (
	        <section class={suit} value={card.value}>
		        <div class="card__inner card__inner--centered">
		            <div class="card__column">
		                <div class="card__symbol"></div>
		            </div>
		        </div>
	        </section>
              
	
         
        )
    }
}
export default Card