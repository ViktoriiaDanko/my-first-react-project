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
  <table>
    <thead>
      <tr>
        <th>User name</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {listItems.map(todo => <App name={user.name} title={todo.title} status={status} />)}  
    </tbody>
  </table>
    
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
      <ul>{listItems}</ul>
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
