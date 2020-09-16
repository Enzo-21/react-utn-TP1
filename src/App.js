import React from 'react';
import './App.css';

//Components
import { Form, Header } from './components';


function App() {
  return (
    <div className="App">
      <Header />
      <Form/>
      <div className="shape"></div>
    </div>
  );
}

export default App;