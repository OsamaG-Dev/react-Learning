
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
/*
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
  render(){
    return <h2>I have a car called {this.props.brand}</h2>
  }
}
const element=<Car brand="FORD" />;

ReactDOM.render(element,document.getElementById('root'));
*/
//-------------------------------------------------------------
//======getDerivedStateFromProps example===================
/*
import React from 'react';
import ReactDOM from 'react-dom';

class StateFromProps extends React.Component{
  constructor(props){
    super(props);
    this.state={favoriteColor : "Blue"};
  }
  static getDerivedStateFromProps(props,state){
    return {favoriteColor : props.favCol};
  }
  render(){
    return <h2> My Favourite Color is {this.state.favoriteColor}</h2>
  }
}
ReactDOM.render(<StateFromProps favCol="Yellow" />, document.getElementById('root'));*/
//================================================================
//--------render method example----------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component{
  
  render(){
    var element=<h2>Hello World</h2>;
    return element;
  }
}
ReactDOM.render(<Header />,document.getElementById('root'));
*/
//=============================================================
//-----------componentDidMount------------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class ComponentDIDMountExample extends React.Component{
  constructor(props){
    super(props);
    this.state={favoriteColor : "BLUE"};
  }
  componentDidMount(){
    setTimeout(
      () => {
        this.setState({favoriteColor : "YEllow"})
      }
    ,3000);
  }
  render(){
    return <h2>My Favourite Color is {this.state.favoriteColor}</h2>
  }
}
ReactDOM.render(<ComponentDIDMountExample />,document.getElementById('root'))
*/
//===========Updating Component: getDerivedStateFromProps=========
/*
import React from 'react';
import ReactDOM from 'react-dom';
class StateFromProps extends React.Component{
  constructor(props){
    super(props);
    this.state={color : "Blue"};
  }
  static getDerivedStateFromProps(props,state){
    return{color : props.favcol}
  }
  changeColor = () => {
     this.setState({color: "Red"});
  }
  render(){
    return(
      <div>
  <h2>My Favorite Color is {this.state.color}</h2>
  <button type="button" onClick={this.changeColor}>Click to Change Color</button>
      </div>
    );
  }
}
ReactDOM.render(<StateFromProps favcol="YELLOW" />,document.getElementById("root"));
*/
//================================================================
//------updating Component: shouldComponentUpdate----------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {color : "Blue"};
  }
  shouldComponentUpdate(){
    return true;
  }
  changeColor= () => {
    this.setState({color : props.favcol});
  }
  render(){
    return (
      <div>
    <h2> My Fav color is: {this.state.color} </h2>
    <button type='button' onClick={this.changeColor}>Click to Change Color</button>
      </div>
    );
  }
}
ReactDOM.render(<Header favcol="white" />,document.getElementById('root'));*/
//===============================================================
//------Updating Component: Snapshot-------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class SnapshotExample extends React.Component{
  constructor(props){
    super(props);
    this.state={color : "White"};
  }
  componentDidMount(){
    setTimeout(
      () => {
        this.setState({color : "Blue!!"});
      }
    ,3000);
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    document.getElementById("DIV1").innerHTML="Before the updation, my favorite color was "+prevState.color;
  }
  componentDidUpdate(){
    document.getElementById("DIV2").innerHTML="After Updation, My favorite color is "+this.state.color;
  }
  render(){
    return(
<div>
    <h2>Displaying information about my Favorite Color</h2>
    <div id='DIV1'></div>
    <div id='DIV2'></div>
</div>
    );
  }
}
ReactDOM.render(<SnapshotExample />,document.getElementById("root"));
*/
//================================================================
//-------Updating Component: componentDidUpdate-----------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class FavColor extends React.Component{
  constructor(props){
    super(props);
    this.state={color: "Red"};
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({color : "YELLOW"})
    },3000);
  }
  componentDidUpdate(){
    document.getElementById("DIV1").innerHTML="My Favourite Color after update is "+this.state.color;
  }
  render(){
    return(
      <div>
        <h2>My Favourite Color is {this.state.color}</h2>
        <div id="DIV1"></div>
      </div>
    )
  }
}
ReactDOM.render(<FavColor />,document.getElementById('root'));
*/
//=============================================================
//------Umounting--------------------------------------------
/*
import React from 'react';
import ReactDOM from 'react-dom';
class Component extends React.Component{
constructor(props){
  super(props);
  this.state={show : true};
}
delHeader = () =>{
  this.setState({show : false});
}
render(){
  let myHeader;
  if(this.state.show){
    myHeader = <Child />;
  }
  return (
    <div>
{myHeader}
<button type="button" onClick={this.delHeader}>Delete Header</button>
</div>
  );
}
}
class Child extends React.Component{
  componentWillUnmount(){
    alert('The Header Component component is about to unmount');
  }
  render(){
    return <h2>Hello World</h2>;
  }
}
ReactDOM.render(<Component />,document.getElementById('root'));
*/
//=================================================================
//------React Events---------------------------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';

function shoot(){
  alert('Nice Shot!!!!');
}
 const element = <button onClick={shoot}>Click to shoot</button>;
 ReactDOM.render(element,document.getElementById('root'));
 */
//================================================================
//-----------Event Handlers------------------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Component extends React.Component{
  shoot() {
    alert('Nice SHOT PAL');
  }
  render(){
    return(
<div>
<h2>Click the Button to Shoot the ball</h2>
<button onClick={this.shoot}>Click to shooot</button>
</div>
    );
  }
}
ReactDOM.render(<Component />,document.getElementById('root'));
*/
//===============================================================
//-----------Event handler Bind this-----------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Football extends React.Component{
  shoot = ()=>{
    alert(this);
  }
  render(){
    return <button onClick={this.shoot}>Click the Button</button>;
  }
}
ReactDOM.render(<Football />,document.getElementById('root'));
*/
//--------------------------------------------------------------
//--------Binding this keyword----------------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Component extends React.Component{
  constructor(props){
    super(props);
    this.shoot=this.shoot.bind(this);
  }
  shoot(){
    alert(this);
  }
  render(){
    return <button onClick={this.shoot}>click the button</button>
  }
}
ReactDOM.render(<Component />,document.getElementById('root'));
*/
//=================================================================
//----------Passing a value----------------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Component extends React.Component{
  shoot = (a) =>{
    alert(a);
  }
  render(){
    return <button onClick={()=>{this.shoot("GOAL")}}>click to Shoot</button>;
  }
}
ReactDOM.render(<Component />,document.getElementById('root'));
*/
//==============================================================
//------------------Passing a value via bind---------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Component extends React.Component{
  shoot(a){
    alert(a);
  }
  render(){
    return <button onClick={this.shoot.bind(this,"GOAL!!!")}>Click to shoot</button>
  }
}
ReactDOM.render(<Component />,document.getElementById('root'));
*/
//==================================================================
//-------React Event Object with arrow function--------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Component extends React.Component{
  shoot =(a,b) =>{
    alert(b.type);
  }
  render(){
    return <button onClick={(event)=>{this.shoot("GOAL" , event)}}>Click to check the event Type</button>
  }
}
ReactDOM.render(<Component />,document.getElementById('root'))
*/
//=================================================================
//-------React Event Object without arrow function---------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Component extends React.Component{
  shoot(a,b){
    alert(b.type);
    alert(a);
  }
  render(){
    return <button onClick={this.shoot.bind(this,"GOAL!!")}>Click to check the type of event</button>
  }
}
ReactDOM.render(<Component />,document.getElementById('root'));
*/
//===============================================================
//---------Forms : Adding a Form--------------------------------
/*import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component{
  render(){
    return(
<form>
<h2>Hello</h2>
<p>Enter your Name</p>
<input type='text' />
<button type='submit' >Submit</button>
</form>
    );
  }
}
ReactDOM.render(<Form />,document.getElementById('root'))
*/
//==============================================================
//-----------Handling Form-------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
class Handling extends React.Component{
  constructor(props){
    super(props);
    this.state={username : ''};
  }
  changeHandler=(event) =>{
    this.setState({username:event.target.value});
  }
  render(){
    return(
      <form>
  <h1>Hello {this.state.username}</h1>
  <p>Enter your name</p>
  <input type='text' onChange={this.changeHandler} />
      </form>
    );
  }
}
ReactDOM.render(<Handling />,document.getElementById('root'));