import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData = [
    {id: '1', name: 'Andrew'},
    {id: '2', name: 'Eliza'},
    {id: '3', name: 'Semen'},
    {id: '4', name: 'Petr'},
    {id: '5', name: 'Elly'}
]

let messagesData = [
    {id : '1', message: 'How r u?'},
    {id : '2', message: 'Hello!'},
    {id : '3', message: 'Some new msg'}
]

let postsData = [
    {id: '1', message: 'Hello World'},
    {id: '2', message: 'My first post'},
    {id: '3', message: 'My second post'},
    {id: '4', message: 'again Hello World'},
    {id: '5', message: 'and again new post'},
    {id: '6', message: null}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs = {dialogsData} messages = {messagesData} posts = {postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
