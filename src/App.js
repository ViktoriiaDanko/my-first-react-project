import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import PropTypes from 'prop-types';


function App(props) {
  const listItems = props.todos.map((todo) => {
    const user = props.users.find(user => user.id === todo.userId);
    const status =  todo.completed ? 'Completed' : 'Not completed';

    return (
      <tr key={user.id}>
        <td>
          {user.name}
        </td>
        <td>
          {todo.title} 
        </td>
        <td>
          {status}
        </td>
      </tr>
  )
 });
    
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
    <table className="items">
        <thead>
          <tr>
            <th>User name</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
    </div>
    </div>
  );
};
  
App.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape( {
      name: PropTypes.string,
    })
  ).isRequired
};

export default App;