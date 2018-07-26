import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {validateForm, checkFormErrors} from 'simple-redux-form-checker';
import {newFriend} from './actions';

class App extends Component {

  handleSubmit(e){
    console.log(e)
    e.preventDefault();
    const formInputs = {
      id: Date.now().toString(),
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value
    }
    console.log(formInputs)
    validateForm(formInputs)
    .then(()=>this.props.dispatch(newFriend(formInputs)))
    .catch((errors)=>this.props.dispatch(checkFormErrors(errors)))
  }

  checkOnType(inputField){
    console.log(this.refs[inputField].value)
    validateForm(this.refs[inputField].value)
    .then(()=> {
      console.log("Validated");
      if(this.props.errors[inputField]){
        this.props.dispatch(checkFormErrors({...this.props.errors, [inputField]: ''}))
      }
    })
    .catch((errors)=>this.props.dispatch(checkFormErrors(errors)))
  }

  render() {
    const {errors} = this.props;
    const style = {
      color: '#f00',
      minHeight: '1em'
    }
    return (
      <div className="App">
        <h1>Simple Redux Form Example</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h2>Add Friend</h2>
          <div>
            <label>Name: </label>
            <input ref='name' type='text' onKeyUp={this.checkOnType.bind(this, 'name')} />
            <div style={style}>
              {errors['name'] && errors['name']}
            </div>
          </div>
          <div>
            <label>E-mail: </label>
            <input ref='email' type='text' onKeyUp={this.checkOnType.bind(this, 'email')} />
            <div style={style}>
              {errors['email'] && errors['email']}
            </div>
          </div>
          <div>
            <label>Phone: </label>
            <input ref='phone' type='text' onKeyUp={this.checkOnType.bind(this, 'phone')} />
            <div style={style}>
              {errors['phone'] && errors['phone']}
            </div>
          </div>
          <input type='submit' value='Submit' />
        </form>
        {this.props.friends.map(f=>(
          <div key={f.id}>
            <h2>{f.name}</h2>
            <p>{f.phone}</p>
            <p>{f.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({friends, formErrors}){
  return {
    friends,
    errors: formErrors
  }
}

export default connect(mapStateToProps)(App);
