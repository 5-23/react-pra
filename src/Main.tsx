import React from 'react';
import logo from './logo.svg';
import './Main.css';


function Comp(props: {title: string}){
	return (
		<div style={
			{
				backgroundColor: "#3366ff",
				color: "#fff",
				borderRadius: "10px",
				padding: "10px",
				marginBottom: "10px",
				border: "solid 5px #2244cc"
			}
		}>
			<h1>{props.title}</h1>
			<h2>{props.title}</h2>
			<h3>{props.title}</h3>
			<h4>{props.title}</h4>
			<h5>{props.title}</h5>
			<h6>{props.title}</h6>
		</div>
	)
}

function App() {
  	return (
    	<main>
			<Comp title="a"/>
			<Comp title="s"/>
			<Comp title="d"/>
			<Comp title="f"/>
    	</main>
  );
}

export default App;
