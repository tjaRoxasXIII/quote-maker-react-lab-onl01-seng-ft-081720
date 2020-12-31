export default (state = [], action) => {

  switch (action.type) {
    
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      let upvotes = state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: quote.votes + 1}
        }
        else {
          return quote
        }
      })

      return upvotes

    case 'DOWNVOTE_QUOTE':
      let newVotes = state.map(quote => {
        if ((quote.id === action.quoteId) && (quote.votes > 0)) {
          return { ...quote, votes: quote.votes - 1}
        }
        else {
          return quote
        }
      })

      return newVotes

    default:
      return state;
  }
}
