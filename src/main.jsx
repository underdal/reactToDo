import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

import TodoList from './todoList';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <TodoList />
  </Provider>,
  document.getElementById('root')
);