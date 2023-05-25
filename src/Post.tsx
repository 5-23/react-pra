import { Component } from "react"
import './Post.css'


export default class Post extends Component<{arr: Array<[string | undefined, string | undefined]>}>{
    render(): JSX.Element {
        return (
            <div id="posts">
                {this.props.arr.map(([title, des], _:number) => (
                    <div className="post">
                        <h1>{title}</h1>
                        <h2>{des}</h2>
                    </div>
                ))}
            </div>
        )
    }
}