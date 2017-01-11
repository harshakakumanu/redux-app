/**
 * Created by harshakakumanu on 2017-01-10.
 */

export default function courseReducer(state=[],action) {
  switch(action.type){
    case 'CREATE_COURSE':
      return [...state,Object.assign({},action.course)];
    default:
      return state;
  }
}
