import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App(props) {
  const listItems = props.users.map((user) =>
   <li key = {user.id}>
     {user.name}
   </li>
  );

  return (
    <div className="App">
    <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    <div className="listItems">
      <ul>{listItems}</ul>
    </div>
    </div>
  );
}

export default App;
