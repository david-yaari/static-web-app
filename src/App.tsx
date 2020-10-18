import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  interface Provider {
    id: number;
    message: string;
  }

  const [appState, setAppState] = useState([{ id: 1, message: '' }]);
  const [docState, setDocState] = useState([{ id: 1, name: '' }]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/GetMessage`);
    const body = await response.json();
    setAppState(body);

    const response2 = await fetch(
      `${process.env.REACT_APP_API_URL}/GetCosmosDBDoc`
    );
    const body2 = await response2.json();
    setDocState(body2);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <p>Test</p>
        {appState.map((item) => {
          return (
            <li key={item.id} className='list'>
              <span>{item.message}</span>
            </li>
          );
        })}
        {docState.map((item) => {
          return (
            <li key={item.id} className='list'>
              <span>{item.name}</span>
            </li>
          );
        })}
      </header>
    </div>
  );
}

export default App;
