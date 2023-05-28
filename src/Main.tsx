import './Main.css';
import {useState, Component, useRef} from 'react'
import Post from './Post'




export default function Main(){
	const post_data = useState<Array<[string | undefined, string | undefined]>>([]);
	const [modal, change_modal] = useState<Boolean>(false)
	const [title, des] = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
	console.log(window.innerHeight)
	return (
		<main>
			<div id="modal" style={{height: `${window.outerHeight}px`, display: modal? "flex": "none"}}>
				<form onSubmit={
					(e) => {
					e.preventDefault()
					let value: Array<[string | undefined, string | undefined]> = [...post_data[0], [title.current?.value, des.current?.value]]
					console.log(value)
					post_data[1](value)
					change_modal(false)
				}}>
					<h3>title</h3>
					<input type="text" name="title" id="title" placeholder="title" ref={title} required/> <br/>
					
					<h3>description</h3>
					<input type="text" name="des" id="des" placeholder="description" ref={des} required/> <br/>
					<input type="submit" value="submit" />
				</form>
			</div>

			<input id="modal-sw" type="button" value="+" onClick={() => change_modal(!modal)}/>
			<Post arr={post_data[0]}></Post>
		</main>
	)
}