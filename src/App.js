import logo from './logo.svg';
import './App.css';
import logo2 from './logo.png';
import './scss/custom.scss';
import Navbar from './components/navbar';
import styled from 'styled-components';
import Banner from './components/banner';
import CategoryBox from './components/cat-box';
import Footer from './components/footer.js';
import { Router,Link,BrowserRouter,Switch,Route } from 'react-router-dom';
import CategoryMenu from './components/cat-menu';


function App() {
  return (
  <BrowserRouter>
    <div className="page-container">
    <div className="content-wrap"> 
      <Navbar/>
      <Banner/>
      <Switch>
        <Route path="/categorias/:id">
          <CategoryMenu />
        </Route>
        <Route path="/">
          <CategoryBox/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </div>
  </BrowserRouter>
  );
}

function Header() {
  return(
      <header className="header-header">
        <div className="logo-header">
          <img src={logo2} className="header-logo" alt="logo" />
          <p className="name-pasteleria">Pastelería piñufle</p>
        </div>
      </header>
    );
}


export default App;
