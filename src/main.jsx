import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import List from './list.jsx'
// import Apple from './Apple.jsx'
// import Form from './Form.jsx'
// import Useeff from './useeff.jsx'
// import Useref from './useref.jsx'
import Hen from './hen.jsx'
import Apps from './Apps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
    {/* <List /> */}
    {/* <Form /> */}
    {/* <Useeff /> */}
    {/* <Useref/> */}
    {/* <Hen name='hello'/> */}

  </StrictMode>,
)
