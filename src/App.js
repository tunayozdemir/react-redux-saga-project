import React from 'react';
import './App.scss';
import 'antd/dist/antd.min.css';
import './assets/style/_general.scss'
import { Home, Todo } from './pages'



function App() {

  return (
    <div>
      <Home />
      <Todo/>
    </div>
  );
}

export default App;
