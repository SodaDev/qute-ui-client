import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import QueueItemsContainer from './components/QueueItemsContainer';
import "./index.css";

const themes: Array<number> = ['purple', 'green', 'orange', 'red'];
let items = themes.map((theme, id) => ({id, theme}));

function renderButton(container: HTMLElement, visited?: boolean) {
    const element = (
        <App>
            <QueueItemsContainer items={items}/>
        </App>
    );
    ReactDOM.render(element, container);
}

(renderButton(document.getElementById('root')));

