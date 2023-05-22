import './Main.css';
import {useState} from 'react'


function Comp(props: {title: string}): JSX.Element{
	let state = useState(0)
	return (
		<div>
			<h1>{props.title} | {state[0]}</h1>
			<input type="button" value={props.title} onClick={() => {

				let [s_value, s_change] = state;
				s_change(s_value + 1)
			}} />
			<input type="button" value={props.title} onClick={() => {

				let [s_value, s_change] = state;
				s_change(s_value - 1)
			}} />
		</div>
	)
}

function App(): JSX.Element {
  	return (
    	<main>
			<Comp title="title"/>
			<Comp title="asdf"/>
			<Comp title="hmmmmmm"/>
    	</main>
  );
}

export default App;
