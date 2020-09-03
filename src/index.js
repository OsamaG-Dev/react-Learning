
//-----------Using Constructor---------------------
/*import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
  constructor(){
    super();
    this.state={
      color : "red",
      model : "BMW",
      year  : 2018
    };
  }
  render(){
    return <div> 
    <h2>I am a {this.state.color} color car</h2>
    <h3> My Car Model is <b>{this.state.model}</b></h3>
    <h4> Car Release Year is {this.state.year}</h4>
    </div>
    ;
  }
}
ReactDOM.render(<Car />,document.getElementById('root'));*/
//=======================================================
//-------Using PRops-------------------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
  render(){
    return <h2>I have a {this.props.color} color car</h2>;
  }
}

ReactDOM.render(<Car color="red" />,document.getElementById('root'));*/
//===============================================================
//---------------Components inside Components--------------------
/*
import React from 'react';
import ReactDOM from 'react-dom';
class Car extends React.Component{
  render(){
    return <h2>Ravi Lives inside the Garage</h2>;
  }
}
class Garage extends React.Component{
  render(){
    return (
      <div>
      <h1>Who Lives inside the Garage?</h1>
      <Car />
      </div>
      )
  }
}
ReactDOM.render(<Garage />,document.getElementById('root'));
*/
//=================================================================
//-----------Components Using Inside JS Files-------------------
/*
import React from 'react';
import ReactDOM from 'react-dom';
import Car from "./App.js";

ReactDOM.render(<Car />,document.getElementById('root'));
*/
//================================================================
//----------------Props Example----------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
  render(){
    return <h2>I have a car called {this.props.brand}</h2>
  }
}
const element=<Car brand="FORD" />;

ReactDOM.render(element,document.getElementById('root'));
//---------
