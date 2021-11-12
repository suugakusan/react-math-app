import React from 'react'

const Item = ({ dispatch, dispatch2, item }) => {
  const id = item.id
  const ClickDeleteButton = () =>{
    dispatch({ type: 'DELETE_ITEM', id})
  }
  const ClickFinishButton = () =>{
    dispatch({ type: 'FINISH_ITEM', id})
    dispatch2({ type: 'FINISH_ITEM', id})
  }
  return(
    <tr>
      <td>{id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
      <td><button type="button" className="btn btn-primary"　onClick={ClickFinishButton}>完了</button>
      <button type="button" className="btn btn-danger" onClick={ClickDeleteButton}>削除</button>　</td>
    </tr>
  )
}







export default Item