import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'


// Components
import Events from './components/Envents';
import EventForm from './components/EventForm'
import Event from './components/Event'

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
        <Route exact path="/event/form" component={EventForm} />
        <Route exact path="/event/:id" component={Event} />
        <Route exact path="/" component={Events} />
        <Route exact path="/events" component={Events} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
