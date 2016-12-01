import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import QueueItem from './components/QueueItem';
import QueueItemsContainer from './components/QueueItemsContainer';
import "./index.css";

function renderButton(container: HTMLElement, visited?: boolean) {
    const element = (
        <App>
            <QueueItemsContainer>
                <QueueItem />
            </QueueItemsContainer>
        </App>
    );
    ReactDOM.render(element, container);
}

(renderButton(document.getElementById('root')));
