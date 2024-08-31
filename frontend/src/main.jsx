import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Cardsystem } from './Cardsystem.jsx'
import { Boxsystem } from './Boxsystem.jsx'
import { Paginationsystem } from './Paginationsystem.jsx'
import { PaginationWithBackEnd } from './PaginationWithBackEnd.jsx'
import {store} from './app/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
    {/* <Cardsystem /> */}
    {/* <Boxsystem /> */}
    {/* <Paginationsystem /> */}
   
  </StrictMode>,
)
