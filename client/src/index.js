import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
//import AppRouter from './components/AppRouter';
import App from './App';
import UserStore from './store/UserStore';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value = {{
        user: new UserStore()
    }}>
      <App />
    </Context.Provider>,
    document.getElementById('root')
)

