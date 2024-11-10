import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './Landing';
// import Rent from './Rent';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Rent/> */}
    <Landing/>
  </StrictMode>,
)
