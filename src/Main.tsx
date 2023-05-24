import './Main.css';
import {useState, Component} from 'react'





export default class Main extends Component{
	render(): JSX.Element{
		const a = useState();
		return (
			<main>
				<form onSubmit={
					(e) => {
					e.preventDefault()
					// let value = [...a[0], [e.target.title.value, e.target.des.value]]
					// console.log(value)
				}}>
					<input type="text" name="title" id="title" placeholder="title" /> <br/>
					<input type="text" name="des" id="des" placeholder="description"/> <br/>
					<input type="submit" value="submit" />
				</form>
			</main>
	  );
	}
}