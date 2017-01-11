/**
 * Created by harshakakumanu on 2017-01-10.
 */
import {createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';


export default  function configureStore(initialState) {

  return createStore(
    rootReducer,
    initialState
  );
}
