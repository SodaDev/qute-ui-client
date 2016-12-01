import React from "react";
import ReactDOM from "react-dom";
import App from './App';

import configureStore from './store/configureStore';
import QueueItemsContainer from './components/QueueItemsContainer';
import "./index.css";
import { addQueueItem } from './actions';

const themes: Array<number> = ['purple', 'green', 'orange', 'red'];
let items = themes.map((theme, id) => ({id, theme}));
const store = configureStore();

function renderButton(container: HTMLElement, visited?: boolean) {
    const element = (
        <App store={store}>
            <QueueItemsContainer items={items}/>
        </App>
    );
    ReactDOM.render(element, container);
}

(renderButton(document.getElementById('root')));

const pushToQue = () => store.dispatch(addQueueItem({
    id: store.getState().queueItems.items.length,
    theme: themes[store.getState().queueItems.items.length % themes.length]
}));
pushToQue();
setInterval(pushToQue, 3000);