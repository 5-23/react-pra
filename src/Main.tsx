import './Main.css';
import {useState, Component, useRef} from 'react'
import Post from './Post'




export default function Main(){
	const a = useState<Array<[string | undefined, string | undefined]>>([]);
	const [title, des] = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
	return (
		<main>
			<form onSubmit={
				(e) => {
				e.preventDefault()
				let value: Array<[string | undefined, string | undefined]> = [...a[0], [title.current?.value, des.current?.value]]
				console.log(value)
				a[1](value)
			}}>
				<input type="text" name="title" id="title" placeholder="title" ref={title}/> <br/>
				<input type="text" name="des" id="des" placeholder="description" ref={des}/> <br/>
				<input type="submit" value="submit" />
			</form>
			<Post arr={a[0]}></Post>
		</main>
	)
}