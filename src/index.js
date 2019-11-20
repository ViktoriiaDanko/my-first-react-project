import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import todos from './api/todos';
import users from './api/users';

ReactDOM.render(
    <App todos = {todos} users = {users} />, 
    document.getElementById('root')
   );