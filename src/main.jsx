
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import ThemeProvider from './Components/ThemeProvider.jsx'
import { store ,persistor } from "./Redux/Store.jsx"
createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
        <ThemeProvider>
           <App/>
        </ThemeProvider>
    </Provider>
  </PersistGate>
   
 
)
