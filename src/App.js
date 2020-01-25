import React, { useEffect } from 'react';
import logo from './logo.svg';
import store from './store';
import './App.css';

const milliseconds = () => {
  const { milliseconds, load } = store.getState();
  const dispatch = {
    type: 'INCRE_MILLI',
    payload: {
      milliseconds: Number(store.getState().milliseconds) + 1,
    },
  };

  if (milliseconds >= 19) {
    dispatch.payload.milliseconds = 0;
    seconds();
  }

  if (load) store.dispatch(dispatch);
}

const seconds = () => {
  const { seconds } = store.getState();
  const dispatch = {
    type: 'INCRE_SEC',
    payload: {
      seconds: Number(store.getState().seconds) + 1,
    },
  };


  if (seconds >= 59) {
    dispatch.payload.seconds = 0;
    minutes();
  }

  store.dispatch(dispatch);
}

const minutes = () => {
  const { minutes } = store.getState();
  const dispatch = {
    type: 'INCRE_MIN',
    payload: {
      minutes: Number(store.getState().minutes) + 1,
    },
  };


  if (minutes >= 59) {
    dispatch.payload.minutes = 0;
    hours();
  }

  store.dispatch(dispatch);
}

const hours = () => {
  const dispatch = {
    type: 'INCRE_HOUR',
    payload: {
      hours: Number(store.getState().hours) + 1,
    },
  };

  store.dispatch(dispatch);
}

const reset = () => {
  const dispatch = {
    type: 'RESET',
    payload: {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      load: false,
    },
  };

  store.dispatch(dispatch);
}

function App() {
  useEffect(() => {
    setInterval(milliseconds, 50);
  }, []);

  const dispatch = {
    type: 'TOOGLE',
    payload: {
      load: store.getState().load,
    },
  };

  const { load } = store.getState();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => store.dispatch(dispatch)}>{load ? 'Pause' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
        <p>{store.getState().milliseconds}</p>
        <p>{store.getState().seconds}</p>
        <p>{store.getState().minutes}</p>
        <p>{store.getState().hours}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
