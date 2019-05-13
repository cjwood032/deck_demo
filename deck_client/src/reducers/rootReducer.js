export default function rootReducer(state={decks: [],}, action){
    switch (action.type) {
        case 'CREATE_DECK_SUCCESS':
            return state.concat(action.deck)
        case 'DRAW_CARDS':
            return state.concat(action.cards)
        default:
            return state;
    }
}
