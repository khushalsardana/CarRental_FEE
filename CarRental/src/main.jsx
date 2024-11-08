import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rent from './Rent.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rent />
  </StrictMode>,
)
