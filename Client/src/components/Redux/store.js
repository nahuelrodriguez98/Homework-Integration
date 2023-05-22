import { createStore,applyMiddleware, compose } from "redux";
import  ThunkMiddleware from "redux-thunk";
import  reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea sirve para conectar nuestra app con la extension REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))//Esta linea sirve para que podamos hacer petisiones a una APi/servidor
)

export default store;