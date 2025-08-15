import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers'
const store = configureStore({
    reducer: rootReducer,
});

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
)
