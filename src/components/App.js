import React,{ useReducer, useState } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Item from './Item'
import FinishItem from './FinishItem'
import reducer from '../reducers'
const App =()=> {
  const [state, dispatch] = useReducer(reducer, [])
  const [state2, dispatch2] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addItem = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_ITEM',
      title,
      body
    })
    setTitle('')
    setBody('')
  }
  return (
    <div className="container">
      <h4>図形の性質を覚えよう！</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formTitle">暗記事項タイトル</label>
          <input className="form-control" id="formTitle" value={title} onChange={e=> setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="formBody">内容</label>
          <textarea className="form-control" id="formBody" value={body} onChange={e=> setBody(e.target.value)}/>
        </div>
        
        <button className="btn btn-primary" onClick={addItem}>作成</button>
        <button className="btn btn-success">完了</button>
        <button className="btn btn-danger">削除</button>
      </form>
      <h4>未完了</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((item, index) => (<Item key={index} item={item} dispatch={dispatch} dispatch2={dispatch2}/>))}
        </tbody>
      </table>
      <h4>完了</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>内容</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state2.map((item, index) => (<FinishItem key={index} item={item} dispatch2={dispatch2}/>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
