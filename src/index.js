import state, {subscribe, addPost, updateNewPostText} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {props} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state)

subscribe(renderEntireTree)