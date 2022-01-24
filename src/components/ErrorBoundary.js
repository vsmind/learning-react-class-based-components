import {Component} from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false};
    }

    // trigger when en of the child component throws en error
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;