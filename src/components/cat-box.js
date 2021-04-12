import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class CategoryBox extends Component{
	constructor(props){
		super(props);
		this.state={
			categorys:[]

		};
	}
	componentDidMount(){
		fetch("http://localhost:80/dinamic/api/categorias/index.php")
		.then(response=>response.json())
		.then((data)=>this.setState({categorys:data}))
		.catch()
	}
	render(){
		const {categorys}=this.state;
		return(
				<section>
					<div className="flexbox-container prods-container">
						{categorys.map(
							cat=>(
									<div className="flexbox-item flexbox-item-catbox col-xl col-lg-4 col-md-4 col-sm-6 col-6" key={cat.name}>
										<Link to={`/categorias/${cat.id}`}>
											<img className="image-responsive" src="/categorias/Cocteles.jpeg"></img>
											<div>	
												<p>{cat.name}</p>
											</div>
										</Link>
									</div>
								
								)
							)}
					</div>
				</section>
			);
	}
}

export default CategoryBox;