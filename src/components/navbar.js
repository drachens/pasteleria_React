import React, { Component } from 'react';
import logo2 from '../logo.png';
import styled from 'styled-components';
import '../App.css';
import Main from './Styles/globalStyles.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import Categorias from '../api/test.js';



class Navbar extends Component{

	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-ligth sticky-top">
        <a className="navbar-brand" href="#"><Main className="nav-tittle " text="Piñufle"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown active nav-items-pinufle">
               <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" role="button" aria-expanded="true" aria-haspopup="true">Categorias</a>
                <Categorias/>
            </li>
            <li className="nav-item active nav-items-pinufle"><a className="nav-link" href="#">Recetas</a></li>
            <li className="nav-item active nav-items-pinufle"><a className="nav-link" href="#">Poto <span className="sr-only">(current)</span></a></li>
            <li className="nav-item active nav-items-pinufle">
              <a className="nav-link" href="#">Disabled</a>
            </li>
            <li className="nav-item active nav-items-pinufle"><a className="nav-link" href="#">Contactanos</a></li>
          </ul>
          <form className="form-inline my-2 my-lg-0" id="formNav">
            <input type="search" className="form-control mr-sm-2" placeholder="Search" aria-label="Search"></input>
            <button type="submit" className="btn btn-outline-primary my-2 my-sm-0">Search</button>
          </form>
          <ul className="nav justify-content-end">
            <li className="nav-item active" id="shoppingCart"><a className="nav-item active nav-items-pinufle" href="#"><FontAwesomeIcon icon={faShoppingCart}/></a></li>
          </ul>
          </div>
      </nav>      
      );
	}
}

export default Navbar;