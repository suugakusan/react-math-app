const items = (state=[], action) => {
  switch(action.type) {
    case 'CREATE_ITEM':
      const item = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ?  1 : state[length - 1].id +1
      return [...state, {id, ...item}]
    case 'FINISH_ITEM':
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.id)
      
    default:
      return state
  }
}

export default items