// // App.jsx
// import './App.css';
// import Home from './Home.jsx';
// import Contact from './Contact.jsx';
// import Aboutus from './Aboutus.jsx';
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
//         <div><nav className="navbar">
//             <img
//               src="https://cdn-icons-png.flaticon.com/128/2504/2504884.png" 
//               alt="Logo"
//               className="logo"
//             />
          
//           <div className="logo-name">
//               <Link to="/Home" className="nav-link"style={{ fontSize: '24px', fontWeight: 'bold' }}>MyWebsite</Link>
//             </div>
//           <ul className="nav-links">
//             <li>
//               <Link to="/" className="nav-link">Home</Link>
//             </li>
//             <li>
//               <Link to="/Aboutus" className="nav-link">About Us</Link>
//             </li>
//             <li>
//               <Link to="/Contact" className="nav-link">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Aboutus" element={<Aboutus />} />
//           <Route path="/Contact" element={<Contact />} />
//         </Routes>
//         <footer className="footer">
//           <p>&copy; 2024 MyWebsite. All rights reserved.</p>
//         </footer>
//       </Router>
//     </>
//   );
// }

// export default App;
import { createContext } from 'react';
import Hen from './hen';
// export let nameContext=createContext();
export let colorContext=createContext();
function App(){
  return(
    // <>
    // <Hen need="water"/>
    // </>
    // <nameContext.Provider value="water">
    // <Hen/>
    // </nameContext.Provider> 
    <colorContext.Provider value={{bg:'black',txt:'white'}}>
    <Hen/>
    </colorContext.Provider>
  )
}
export default App

