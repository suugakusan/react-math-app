import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const App =()=> {
  return (
    <div className="container">
      <h4>図形の性質を覚えよう！</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formTitle">暗記事項</label>
          <input className="form-control" id="formTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formBody">内容</label>
          <textarea className="form-control" id="formBody" />
        </div>
        
        <button className="btn btn-primary">作成</button>
        <button className="btn btn-success">完了</button>
        <button className="btn btn-danger">削除</button>
      </form>
      <h4>一覧</h4>
    </div>
  );
}

export default App;
