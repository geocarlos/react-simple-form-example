import {formErrors} from '../../simple-redux-form-checker'



export default combineReducers({...posts, comments, formErrors, categories});
