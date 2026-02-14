import { Component } from "react";


class Newgreet extends Component {
    render() {
        return (
            <h1>Hello, My dear {this.props.name}</h1>
        )
    }
}

export default Newgreet;