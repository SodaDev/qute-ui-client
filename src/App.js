import React, {Component} from "react";
import "./App.css";
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                {this.props.children}
            </Provider>
        );
    }
}

export default App;
