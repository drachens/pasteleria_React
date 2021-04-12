import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component{
	constructor(props){
		super(props);
		this.state={
			categories:[]
		};
	}
	componentDidMount(){
		fetch("http://localhost:80/dinamic/api/categorias/index.php")
		.then(response=>response.json())
		.then(data=>this.setState({categories:data}))
		.catch()
	}
	render(){
		const {categories} = this.state;
		return(
			<footer className="footer">
				<div className="flexbox-container flex-footer">
					<div className="flexbox-item col-xl col-lg col-4">
						<h5>Menu</h5>
						<ul>
							{categories.map(
								cat=>(
									<Link to={`/categorias/${cat.id}`}>
										<li className="no-style" key={cat.name}>{cat.name}</li>
									</Link>
									)
								)}
						</ul>
					</div>
					<div className="flexbox-item col-xl col-lg col-4">
						<h5>Contactanos</h5>
					</div>
					<div className="flexbox-item col-xl col-lg col-4">
						<h5>Locales</h5>
					</div>
					<div className="flexbox-item col-xl col-lg col-4">
						<h5>Novedades</h5>
					</div>
					<div className="flexbox-item col-xl col-lg col-4">
						<h5>Recetas</h5>
					</div>
					<div className="flexbox-item col-xl col-lg col-4">
						<h5>Los pollitos</h5>
					</div>
				</div>
				<div>
					
				</div>
			</footer>
			);
	}
}

export default Footer;