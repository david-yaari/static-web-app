import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  interface Provider {
    id: number;
    message: string;
  }

  const [appState, setAppState] = useState([
    {
      id: 1,
      message: '',
    },
  ]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const apiUrl = `/api/GetMessage`;
    //const apiUrl2 = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => setAppState(data));
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
      </header>
    </div>
  );
}

export default App;
