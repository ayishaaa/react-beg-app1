import { Outlet, Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

const Layout = () => {
  return (
    <>

        <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h2>React</h2>
        <nav>
        <ul>
            <Link style={{ marginLeft: "750px", marginTop: "30px", padding: "20px" }} to="/">Home</Link>
         
            <Link style={{ marginLeft: "25px", marginTop: "30px", padding: "20px" }} to="/blogs">Blogs</Link>
          
            <Link style={{ marginLeft: "25px", marginTop: "30px", padding: "20px" }} to="/contact">Contact</Link>
          
        </ul>
      </nav>
        

        </header>
        
      
        
      
      <Outlet>
        
      </Outlet>
      <div style={{height:"450px"}}></div>
      <footer>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </footer>
    </>
  )
};

export default Layout;