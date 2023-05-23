import './Main.css';
import {useState} from 'react'


function Comp(props: {title: string, fn: (st: {0: number, 1:(x: number)=>void})=>void}): JSX.Element{
	let state = useState(0)
	return (
		<div>
			<h1>{props.title} | {state[0]}</h1>
			<input type="button" value={props.title} onClick={() => {props.fn(state)}} />
		</div>
	)
}

function App(): JSX.Element {
  	return (
    	<main>
			<Comp title="btn1" fn={(st) =>{ st[1](st[0]+3) }}/>
			<Comp title="btn2" fn={(st) =>{ st[1](st[0]-3) }}/>
    	</main>
  );
}

export default App;
