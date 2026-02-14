import {Component} from "react";

class Button extends Component{
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <button type="submit">Click me!</button>
            </div>
        )
    }
}
export default Button;