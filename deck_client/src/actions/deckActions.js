const addDeck = deck =>{
    return {
        type: "CREATE_DECK_SUCCESS",
        deck
    }
}
const setCards = cards =>{
    return {
        type: 'DRAW_CARDS',
        cards
    }
}
const setDecks = decks => {
    return {
        type: 'GET_DECKS_SUCCESS',
        decks
    }
}
export const fetchDecks = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/decks')
        .then(response => response.json())
        .then(decks => dispatch(setDecks(decks)))
        .catch(error => console.log(error))
    };
}
export const newDeck = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/decks', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
            .then(deck => {dispatch(addDeck(deck))})
            .catch(error => console.log(error))
    }
};
export const drawCards = (deck) =>{
    return (dispatch) => {
        return fetch(`http://localhost:3001/api/decks/${deck.deck.id}/draw`, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
            .then(cards => dispatch(setCards(cards)))
            .catch(error => console.log(error))
        }
};