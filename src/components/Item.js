import React from 'react'

const Item = ({ dispatch, item }) => {
  const id = item.id
  const ClickDeleteButton = () =>{
    dispatch({ type: 'DELETE_ITEM', id})
  }
  return(
    <tr>
      <td>{id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
      <td><button type="button" className="btn btn-primary">完了</button>
      <button type="button" className="btn btn-danger" onClick={ClickDeleteButton}>削除</button>　</td>
    </tr>
  )
}

export default Item