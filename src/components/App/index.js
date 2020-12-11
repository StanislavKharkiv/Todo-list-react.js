import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from '../TodoList';
import NewTodo from '../NewTodo';
import './app.css';

function App() {
  return (
    <Router>
			<Switch>
				<Route exact path="/">
					<TodoList />
				</Route>
				<Route path="/new-task">
					<NewTodo />
				</Route>
			</Switch>
    </Router>
  );
}

export default App;
