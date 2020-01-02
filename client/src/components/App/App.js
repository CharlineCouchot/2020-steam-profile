import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import configureStore from '../../configureStore'

const store = configureStore()

const App = () => (
  <StoreProvider store={store}>
    <Router>
      <div className='App'>
        <header className='App-header'>
          <p>
            EditTADA <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  </StoreProvider>
)

export default App
