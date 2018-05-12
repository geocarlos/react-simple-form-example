import {formErrors} from '../../simple-redux-form-checker';
import {NEW_FRIEND, EDIT_FRIEND, DELETE_FRIEND} from '../actions';
import {combineReducers} from 'redux';

function friends(state = [], action){
  const newState = Object.assign([], state);
  switch (action.type) {
    case NEW_FRIEND:
      retun [
        ...state, action.friend
      ];
    case EDIT_FRIEND:
      newState.map((f,i)=>{
        if(f.id === action.friend.id){
          newState[i] = action.friend;
        }
        return null;
      })
      return newState;
    case DELETE_FRIEND:
      newState.map((f,i)=>{
        if(f.id === action.friend.id){
          newState.splice(i, 1);
        }
        return null;
      })
      return newState;
    default:
      return state;
  }
}

export default combineReducers({friends, formErrors});
