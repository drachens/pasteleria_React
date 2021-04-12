import React,{ Component } from "react";
import "../App.css";
import { Link } from 'react-router-dom';
//--Clase donde guadaré la lista del archivo JSON que pediré
class Categorias extends Component{
	constructor(props){
		super(props);
		this.state={
			items:[]
		};
	}
//--funcion que introducirá los datos del archivo JSON en mi arreglo Items[]
	buildList = (data) => {
		//console.log(data);
		this.setState({items: data})
	}

	componentWillMount(){
		fetch("http://localhost:80/dinamic/api/categorias/index.php")
		.then(response=>response.json())
		.then(this.buildList)
		.catch()
	}
	render(){
		const {items}=this.state;
		const doit = this.props.show;
		return(
			
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
				{items.map(item=>(
					<li className="nav-item activate" key={item.name}>
						<Link to={`/categorias/${item.id}`} className="dropdown-item">{item.name}</Link>
					</li>
					))
		
					}
			</ul>
			
			);
			
		
	}
}

export default Categorias;