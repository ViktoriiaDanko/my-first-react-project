import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
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
    </div>
  );
}

function UserList(props) {
  const listItems = users.map((user) =>
   <li key = {user.toString()}>
     {user}
   </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render (
  <UserList users = {users} />,
  document.querySelector('.App')
);

export default App;
