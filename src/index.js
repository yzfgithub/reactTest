import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Main from './components/Main';
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {getAllProducts} from './actions'

const middleware=[thunk]
if(process.env.NODE_ENV!=='production'){
  middleware.push(createLogger())
}

const store = createStore(reducer,applyMiddleware(...middleware))

store.dispatch(getAllProducts())
ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
)


// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
