import React from 'react';
import './App.scss';
import 'antd/dist/antd.min.css';
import './assets/style/_general.scss'
import { Home, Users } from './pages'


function App() {

  return (
    <div>
      <Home />
      <Users/>
    </div>
  );
}

export default App;
