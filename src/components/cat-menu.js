import React,{ Component } from 'react';
import { useParams } from 'react-router-dom';
import Producto from './product.js';
import '../App.css'

const CategoryMenu = () => {
	const [productos, setProductos] = React.useState([])
	const {id} = useParams()
	React.useEffect(() => {
		const obtenerDatos = async () => {
		const data = await fetch(`http://localhost/dinamic/api/producto/?prod=${id}`)
		const productos = await data.json()
		setProductos(productos)
	}
		obtenerDatos()
	},[id])
	return(
		<section>
			<div className="flexbox-container-product flexbox-container col-12 ">
				{productos.map(item=>(
					<Producto key={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} id_cat={item.id_cat} />
					))}
			</div>
		</section>
		)
}
export default CategoryMenu;