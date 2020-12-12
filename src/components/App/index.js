import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from '../TodoList';
import AddTodo from '../AddTodo';
import './app.css';

function App() {
  return (
    <Router>
			<Switch>
				<Route exact path="/">
					<TodoList />
				</Route>
				<Route path="/add-task">
					<AddTodo />
				</Route>
			</Switch>
    </Router>
  );
}

export default App;
