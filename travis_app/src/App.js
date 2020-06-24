import React from 'react';
import './App.css';

const style = {
  margin: '0 auto',
  width: '640px',
};

const title = <h1>My TODO App</h1>

function App() {
  return (
    <div style={style}>
    <Title />
    </div>
  );
}
//components are JS functions that return JSX
//function name has to be capitol for a component

export default App;

function Title(){
  return <h1>My TODO APP Good job</h1>;
}