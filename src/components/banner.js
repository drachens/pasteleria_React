import React, { Component } from 'react';
import logo2 from '../logo.png';
import styled from 'styled-components';
import Main from './Styles/globalStyles.js';
import '../App.css';


class Banner extends Component{
	render(){
		return(
			<div className="banner">
				<div className="banner-logo banner-pos">
					<img src={logo2} className="header-logo mx-4"></img>
				</div>
				<div className="banner-tittle banner-pos">
					<Main className="banner-tittle" text="Pasteleria Piñufle"/>
				</div>
			</div>
			);
	}
}



export default Banner;