import React from 'react'

const FinishItem = ({ dispatch2, item }) => {
  const id = item.id
  const ClickDeleteButton = () =>{
    dispatch2({ type: 'DELETE_ITEM', id})
  }
  return(
    <tr>
      <td>{id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
      <td><button type="button" className="btn btn-primary">戻す</button>
      <button type="button" className="btn btn-danger" onClick={ClickDeleteButton}>削除</button>　</td>
    </tr>
  )
}

export default FinishItem