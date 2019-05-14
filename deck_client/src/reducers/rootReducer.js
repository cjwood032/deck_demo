export default function rootReducer(state={decks: [], cards: [],}, action){
    switch (action.type) {
        case 'CREATE_DECK_SUCCESS':
        return {
            ...state,
            decks: [action.deck],
            cards: []
          }
        case 'DRAW_CARDS':
        
        return {
            ...state,
            cards:  action.cards
          }
        default:
            return state;
    }
}
