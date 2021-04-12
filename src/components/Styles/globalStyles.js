import styled from 'styled-components';
import '../../App.css';

const TitlePinufle = styled.p`

`;

function styledPinufle(props){
	return(
		<TitlePinufle className={props.className}>{props.text}</TitlePinufle>
		)
}
//const styledPinufle = (props,{className}) => {
//	return(
//		<titlePinufle className={className}>{props.text}</titlePinufle>
//		);
//};

const Main = styled(styledPinufle)`
	font-family:'Pinufle title',cursive;
	color:black;

`
export default Main;