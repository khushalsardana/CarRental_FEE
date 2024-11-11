import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Landing from './Landing';
// import Rent from './Rent';
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Rent/> */}
    {/* <Landing/> */}
    <App/>
  </StrictMode>,
)
