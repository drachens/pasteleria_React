import React,{ Component } from 'react';
import '../App.css'

function Producto(props){
	return(

			<div className="flexbox-item flexbox-item-product mx-3 col-xs-12">
				<div className="">
					<img className="image-responsive prod-img" src={props.imagen}/>
				</div>
				<div>
					<p>{props.nombre}</p>
					<p>${props.precio}</p>
				</div>
				<div>
					<button className="btn">Comprar</button>
					<button className="btn">Agregar carro</button>
				</div>

			</div>
		);
}

export default Producto;