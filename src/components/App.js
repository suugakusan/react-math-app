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
      </form>
    </div>
  );
}

export default App;
