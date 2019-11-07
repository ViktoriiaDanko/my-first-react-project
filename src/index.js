import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import users from './api/users';

ReactDOM.render(
    <App users = {users} />, 
    document.getElementById('root')
   );